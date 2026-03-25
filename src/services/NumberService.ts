export function rotate(value: number, rotation: number, limit: number) {
  return (((value + rotation) % limit) + limit) % limit;
}
