export function partition<T>(arr: T[], predicate: (item: T) => boolean) {
  const result: T[][] = [[], []];
  for (const item of arr) {
    result[predicate(item) ? 0 : 1].push(item);
  }
  return result;
}
