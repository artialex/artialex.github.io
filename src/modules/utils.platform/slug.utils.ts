/**
 * Slugifies a string
 *
 * @example
 *   slugify('string%20with%20spaces') // => string_with_spaces
 * @param str
 */
export function slugify(str: string) {
  return encodeURIComponent(str)
}

/**
 * Unslugifies a string
 *
 * @example
 *   unslugify('string_with_spaces') // => string%20with%20spaces
 * @param str
 */
export function unslugify(str: string) {
  return decodeURIComponent(str)
}
