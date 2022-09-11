export const mockResolvers = {
    ID: () => `test-id-${Math.random()}`,
    String: () => `string-${Math.random()}`,
    Tag: () => ({
        id: 'tag',
        prettyName: 'Tag',
    }),
}
