import { createFetch } from '@/core/schema'
import { NextPage } from 'next'
import { RelayEnvironmentProvider, RelayProps } from 'react-relay'
import {
  Environment,
  FetchFunction,
  GraphQLTaggedNode,
  Network,
  OperationType,
  RecordSource,
  Store,
  fetchQuery,
} from 'relay-runtime'
import { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes'

function createEnvironment(records?: RecordMap, network?: any) {
  const recordSource = new RecordSource(records)
  const store = new Store(recordSource)

  return new Environment({ store, network })
}

// function createClientEnvironment(records?: RecordMap) {
//     return createEnvironment(records)
// }
//

function createServerEnvironment(records?: RecordMap) {
  return createEnvironment(records, Network.create(createFetch as FetchFunction))
}

export async function fetchQueryRecords<T extends OperationType>(
  query: GraphQLTaggedNode,
  variables: T['variables']
): Promise<RecordMap> {
  const environment = createServerEnvironment()

  await fetchQuery(environment, query, variables, {
    fetchPolicy: 'network-only',
  }).toPromise()

  return environment.getStore().getSource().toJSON()
}

let environment: Environment

export function getEnv() {
  if (!environment) {
    environment = new Environment({
      store: new Store(new RecordSource()),
      network: Network.create(createFetch as FetchFunction),
    })
  }

  return environment
}

export function withRelay(ComposedComponent: NextPage) {
  return function WithRelay(props: RelayProps<any>) {
    // const environment = useMemo(
    //     () => createEnvironment(props.records, Network.create(createFetch as FetchFunction)),
    //     [props.records]
    // )

    return (
      <RelayEnvironmentProvider environment={environment}>
        {/* @ts-ignore */}
        <ComposedComponent {...props} />
      </RelayEnvironmentProvider>
    )
  }
}
