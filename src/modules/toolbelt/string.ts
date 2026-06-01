export function containsEmoji(str: string): boolean {
  return /\p{Extended_Pictographic}/u.test(str);
}
