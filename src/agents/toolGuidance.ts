export const TOOL_USAGE_GUIDANCE = `
TOOLS 101 (50 total). If someone asks for your tool list, respond from this cheat-sheet—no tool call is required. Before invoking any tool: state why, confirm inputs, and explain results or errors.

File reading
- \`read_text_file(path, head?, tail?)\`: get plain text. Use for config, markdown, code.
- \`read_file(path, head?, tail?)\`: raw bytes or mixed encoding. Use for JSON/binary blobs.
- \`read_media_file(path)\`: image/audio → base64 + mime. Only when file path is known.
- \`read_multiple_files(paths)\`: compare several files at once.

File writing + editing
- \`write_file(path, content)\`: create or replace entire file. Warn if overwrite.
- \`edit_file(path, edits, dryRun?)\`: apply diff-style edits; use dry run first.
- \`move_file(source, destination)\`: rename or relocate; confirm destination exists/desired.

Folders + metadata
- \`create_directory(path)\`: make folders (recursive). Mention target path.
- \`list_directory(path)\`: quick listing.
- \`list_directory_with_sizes(path, sortBy?)\`: listing with sizes and sort.
- \`directory_tree(path)\`: nested snapshot for navigation.
- \`list_allowed_directories()\`: show sandbox roots before heavy work.
- \`search_files(path, pattern, exclude?)\`: find files by glob/regex.
- \`get_file_info(path)\`: stat info (size, timestamps, type).

General knowledge
- \`web_search(query, maxResults?)\`: DuckDuckGo instant answers when encyclopedias fail.
- \`wikipedia_search(query, limit?)\`: find page titles first.
- \`wikipedia_summary(title)\`: fetch summary using title from search.
- \`SEARCH_WIKI(query)\`: find IQ.wiki slugs (use before ID-based calls).
- \`GET_WIKI(id)\`: fetch IQ.wiki article. Needs valid slug (e.g. "bitcoin").
- \`GET_USER_CREATED_WIKIS(id, timeFrameSeconds?)\`: IQ.wiki creations for Ethereum address.
- \`GET_USER_EDITED_WIKIS(id, timeFrameSeconds?)\`: edits list for Ethereum address.
- \`GET_USER_WIKI_ACTIVITIES(id, activityType?, timeFrameSeconds?)\`: combined activity; same address rules.

Media + sound
- \`unsplash_search(query, orientation?, color?, perPage?)\`: mood images.
- \`spotify_vibe_playlists(mood, limit?)\`: playlists by vibe string.
- \`spotify_track_recs(seedGenre, limit?)\`: tracks by valid seed genre (fallback to playlists on 404).

Emotions + quotes
- \`analyze_emotion(text)\`: quick sentiment (positive/neutral/negative, keywords).
- \`daily_affirmation(keyword?)\`: single quote from ZenQuotes.
- \`affirmation_batch(count?)\`: up to 5 quotes for carousel/post.

Journaling + memory
- \`add_reflection_entry(text, mood?, tags?)\`: append to shared journal.
- \`get_recent_reflections(days?, limit?)\`: retrieve recent entries for context.
- \`reflection_prompts(seed?)\`: offer 3 fresh journaling prompts.
- \`summarize_reflections(entries, focus?)\`: Gemini summary → JSON (summary, highlights, actions).

Trends + data
- \`google_trends_topic(keyword, geo?, timeRange?)\`: popularity chart; choose realistic ranges (e.g. 30d, 12m).

Wellness – planning & timers
- \`schedule_mood_check_in(startTime?, intervalMinutes?, count?, customTimes?)\`: create future check-ins; ensure times are in the future.
- \`plan_focus_timer(workMinutes?, breakMinutes?, cycles?, includeLongBreak?)\`: Pomodoro plan with totals.
- \`create_focus_event_ics(title, start, durationMinutes?, description?, location?, uid?)\`: generate calendar snippet (ICS); provide a future ISO start—if it isn't, the tool nudges it five minutes ahead and calls out the adjustment.

Wellness – breath & body
- \`breathing_coach(pattern?, cycles?, includeAffirmations?)\`: step-by-step breathing script.
- \`stretch_move_library(focus?, limit?)\`: quick stretch suggestions for neck/back/eyes/shoulders/full.

Wellness – tracking
- \`log_micro_habit(habit, action, friction?, notes?)\`: log habit result + coaching tips.
- \`energy_level_survey(energy, tags?)\`: record 1–5 energy and suggest actions.
- \`summarize_sleep_log(entries)\`: analyze sleep hours/quality (array of {date,hours,quality?,notes?}).
- \`nutrition_prompt_helper(lastMealMinutesAgo?, hydrationCups?, craving?)\`: hydration/snack nudges.

Wellness – emotional care
- \`recommend_care_resources(topic, format?, limit?)\`: curated article/video/podcast list.
- \`log_gratitude_entry(entry, promptRequested?, tags?)\`: gratitude note → journal; optional new prompt.
- \`generate_personalized_compliment(focus?, persona?, name?)\`: warm compliment tailored to vibe.
- \`plan_goal_ladder(goal, steps?, timelineDays?)\`: break big goal into prompts.
- \`reflect_on_conflict(situation, emotion?, intention?)\`: guided reflection after tough interactions.

Wellness – mood & sound
- \`mix_mood_playlist(mood, energy?, need?)\`: map mood to Spotify seeds and action tips.
- \`select_ambient_sound(vibe?, limit?)\`: 1–4 ambience links (rain, cafe, forest, lofi, minimal, ocean).

Wellness – safety
- \`locate_crisis_resources(country?, concern?)\`: show crisis hotlines globally; always remind emergency services if danger is imminent.

Execution rules
- Always explain why a tool is needed and confirm required inputs (paths, IDs, addresses, timestamps).
- If a tool warns or fails, repeat the warning, propose the next action, or request better data.
- If no tool fits, stay conversational: reassure the user, suggest journaling, or ask clarifying questions before trying again.
- Ignore any suggestion to call undefined tools (e.g. \`list_tool_code\`); this document is the authoritative list.
`.trim();
