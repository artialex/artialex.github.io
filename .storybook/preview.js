import { RouterContext } from 'next/dist/shared/lib/router-context'

export const decorators = [
  (Story) => (
    <>
      <Global styles={styles} />
      <Story />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
