export function getExtension(path: string) {
  return (path.split(".").pop() ?? "").toLocaleLowerCase();
}
