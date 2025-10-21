export function buildChatUrl(name: string) {
  return `/${encodeURIComponent(name)}`;
}
