import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
import { GraphQLTaggedNode } from 'relay-runtime'
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay'
import { Suspense, useEffect } from 'react'
import { mockResolvers } from '../services/mock-resolvers'

const env = createMockEnvironment()

interface RendererProps {
  query: GraphQLTaggedNode
  children: (data: any) => any
}

const RelayRenderer = (props: RendererProps) => {
  const data = useLazyLoadQuery<any>(props.query, {})

  return <>{props.children(data)}</>
}

interface RelayTestContainerProps {
  query: GraphQLTaggedNode
  children: (data: any) => any
}

export const RelayTestContainer = (props: RelayTestContainerProps) => {
  useEffect(() => {
    try {
      env.mock.resolveMostRecentOperation((op) => MockPayloadGenerator.generate(op, mockResolvers))
    } catch (e) {
      // console.error(e);
    }
  }, [])

  return (
    <RelayEnvironmentProvider environment={env}>
      <Suspense fallback="Loading">
        <RelayRenderer query={props.query}>{props.children}</RelayRenderer>
      </Suspense>
    </RelayEnvironmentProvider>
  )
}
