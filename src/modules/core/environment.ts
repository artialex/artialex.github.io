import { useMemo } from 'react'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { createFetch } from './schema'

let _environment: Environment

function createEnvironment(initialRecords: any) {
    return new Environment({
        network: Network.create(createFetch as any),
        store: new Store(new RecordSource()),
    })
}

export function initEnvironment(initialRecords?: any) {
    const environment = _environment ?? createEnvironment(initialRecords)

    // If your page has Next.js data fetching methods that use Relay, the initial records
    // will get hydrated here
    if (initialRecords) {
        environment.getStore().publish(new RecordSource(initialRecords))
    }
    // For SSG and SSR always create a new Relay environment
    if (typeof window === 'undefined') {
        return environment
    }
    // Create the Relay environment once in the client
    if (!_environment) {
        _environment = environment
    }

    return _environment
}

export function useEnvironment(initialRecords: any) {
    return useMemo(() => initEnvironment(initialRecords), [initialRecords])
}
