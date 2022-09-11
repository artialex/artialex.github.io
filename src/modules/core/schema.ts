import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from './schema.gql'

import { graphql } from 'graphql'
import { mergeResolvers } from '@graphql-tools/merge'
import { notesResolvers } from '@/notes/notes.resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: mergeResolvers(notesResolvers),
})

export async function createFetch(params: any, variables: any) {
  return await graphql({
    schema,
    source: params.text,
    variableValues: variables,
  }).then((result) => {
    if (result.errors) {
      throw new Error(result.errors as any)
    }

    return result
  })
}
