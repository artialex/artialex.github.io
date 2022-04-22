import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export let notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),

  endpoints: (builder) => ({
    /**
     *
     * Returns note graph
     */
    getGraph: builder.query<GetGraphResponse, void>({
      query: () => `graph.json`,
    }),

    /**
     *
     * Returns a note by its id
     */
    getProcessedNoteById: builder.query({
      query: (id) => ({
        url: `notes/${id}.md`,
        headers: {
          'content-type': 'text/plain',
        },
        responseHandler: 'text',
      }),
    }),
  }),
})

export let { useGetProcessedNoteByIdQuery, useGetGraphQuery } = notesApi

// -- Types ----------------------------------------------------------------------------------------

export type NodeId = string
export type TagId = string

interface Node {
  backlinks: NodeId[]
}

interface GetGraphRawResponse {
  nodes: { id: NodeId; tags: TagId[] }[]
}

interface GetGraphResponse {
  graph: {
    nodes: Record<NodeId, Node>
    tags: Record<TagId, NodeId[]>
  }
  vault: {
    links: Record<string, { url: string; description?: string }>
    tags: Record<string, string[]>
  }
}
