import getVideoId from "get-video-id";

export function getVideoYoutubeThumbnail(id: string) {
  return `https://i.ytimg.com/vi_webp/${id}/sddefault.webp`;
}

export function getVideoThumbnail(src: string) {
  const service = getVideoId(src);

  if (service.service === "youtube") {
    return getVideoYoutubeThumbnail(service.id!);
  }

  return null;
}
