/**
 * Pluralizes a string
 *
 * @param count
 * @param noun
 * @param suffix
 */
export function pluralize(count: number, noun: string, suffix = 's') {
    return `${count} ${noun}${count !== 1 ? suffix : ''}`
}
