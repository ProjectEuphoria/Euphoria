export function buildChatUrl(name: string, image?: string) {
  const sp = new URLSearchParams();
  if (image) sp.set("image", image);

  const qs = sp.toString();
  return `/chat/${encodeURIComponent(name)}${qs ? `?${qs}` : ""}`;
}
