export function appendQueryString(key: string, value: string) {
  const url = new URL(window.location.href);

  url.searchParams.set(key, value);

  return url.href;
}
