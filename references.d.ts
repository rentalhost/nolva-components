// eslint-disable-next-line importPlugin/unambiguous
declare module "*.css" {}

interface StaticFile {
  src: string;
}

declare module "*.webp" {
  const staticImage: StaticFile;
  export default staticImage;
}

declare module "*.webm" {
  const staticImage: StaticFile;
  export default staticImage;
}

declare module "*.jpg" {
  const staticImage: StaticFile;
  export default staticImage;
}

declare module "*.png" {
  const staticImage: StaticFile;
  export default staticImage;
}

declare module "*.svg" {
  const staticImage: StaticFile;
  export default staticImage;
}
