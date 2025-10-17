import { summarizerTool } from '../src/mcp/toolsets/summarizer.ts';

(async () => {
  try {
    const result = await summarizerTool.runAsync({ entries: ['Had a decent day', 'Feeling optimistic'], focus: 'momentum' } as any, { } as any);
    console.log(result);
  } catch (error) {
    console.error('ERR', error);
  }
})();
