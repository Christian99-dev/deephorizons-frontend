export default function (
  range: number,
  currentIndex: number,
  step: number
): number {
  return (currentIndex + step + range) % range;
}
