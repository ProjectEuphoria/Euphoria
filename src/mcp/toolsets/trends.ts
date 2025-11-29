import { createRequire } from "node:module";
import { Tool } from "../../api/adapters/google-ai-adapter.js";
import { sanitizeErrorMessage } from "../utils/http.js";

const require = createRequire(import.meta.url);
// google-trends-api is CommonJS
// eslint-disable-next-line @typescript-eslint/no-var-requires
const googleTrends = require("google-trends-api");

type TrendsParams = {
  keyword: string;
  geo?: string;
  timeRange?: string;
};

function resolveTimeRange(timeRange?: string) {
  const endTime = new Date();
  const nowMs = endTime.getTime();
  const lower = timeRange?.toLowerCase() ?? "";

  const daysMatch = lower.match(/(\\d+)d/);
  const monthsMatch = lower.match(/(\\d+)m/);
  const yearsMatch = lower.match(/(\\d+)y/);

  let startMs = nowMs - 90 * 24 * 60 * 60 * 1000; // default 90d
  if (daysMatch) {
    startMs = nowMs - Number(daysMatch[1]) * 24 * 60 * 60 * 1000;
  } else if (monthsMatch) {
    startMs = nowMs - Number(monthsMatch[1]) * 30 * 24 * 60 * 60 * 1000;
  } else if (yearsMatch) {
    startMs = nowMs - Number(yearsMatch[1]) * 365 * 24 * 60 * 60 * 1000;
  }

  return { startTime: new Date(startMs), endTime };
}

async function getInterestOverTime({ keyword, geo, timeRange }: TrendsParams) {
  const { startTime, endTime } = resolveTimeRange(timeRange);
  const options: any = { keyword, startTime, endTime };
  if (geo) options.geo = geo;

  const raw = await googleTrends.interestOverTime(options);
  const parsed = JSON.parse(raw);
  const timeline = parsed?.default?.timelineData ?? [];
  return timeline.map((point: any) => ({
    time: Number(point.time) * 1000,
    value: point.value?.[0] ?? 0,
    formattedTime: point.formattedTime,
  }));
}

async function getRelatedQueries({ keyword, geo, timeRange }: TrendsParams) {
  const { startTime, endTime } = resolveTimeRange(timeRange);
  const options: any = { keyword, startTime, endTime };
  if (geo) options.geo = geo;
  const raw = await googleTrends.relatedQueries(options);
  const parsed = JSON.parse(raw);
  const related = parsed?.default?.rankedList?.[0]?.rankedKeyword ?? [];
  return related.slice(0, 10).map((item: any) => ({
    query: item.query,
    value: item.value,
  }));
}

export async function getTrendsTools(): Promise<Tool[]> {
  return [
    {
      name: "google_trends_topic",
      description: "Fetch Google Trends interest over time and top related queries.",
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: "Topic or keyword to trend (e.g. 'mindfulness')" },
          geo: { type: "string", description: "Region code (e.g. 'US', 'GB', 'IN')" },
          timeRange: {
            type: "string",
            description: "Time range (e.g. 'today 12-m', 'now 7-d', 'today 5-y')",
          },
        },
        required: ["keyword"],
      },
      handler: async (params: TrendsParams) => {
        const keyword = params.keyword?.trim();
        if (!keyword) throw new Error("google_trends_topic requires a 'keyword'");
        const geo = params.geo?.trim() || undefined;
        const timeRange = params.timeRange?.trim() || undefined;

        try {
          const [timeline, related] = await Promise.all([
            getInterestOverTime({ keyword, geo, timeRange }),
            getRelatedQueries({ keyword, geo, timeRange }),
          ]);
          return { keyword, geo: geo ?? null, timeRange: timeRange ?? null, timeline, related };
        } catch (error) {
          return {
            keyword,
            geo: geo ?? null,
            timeRange: timeRange ?? null,
            warning: `Google Trends request failed: ${sanitizeErrorMessage(error)}`,
            timeline: [],
            related: [],
          };
        }
      },
    },
  ];
}
