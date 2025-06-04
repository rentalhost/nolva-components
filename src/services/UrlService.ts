export function appendQueryString(key: string, value: string) {
  const url = new URL(window.location.href);

  url.searchParams.set(key, value);

  return url.href;
}

export function generateQueryString(
  params: Record<string, string | undefined>,
) {
  const queryString = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      queryString.set(key, value);
    }
  }

  return `?${queryString.toString()}`;
}

export function getSimplifiedUrl() {
  return window.location.origin + window.location.pathname;
}
