export function containsEmoji(str: string): boolean {
  return /\p{Emoji}/u.test(str);
}
