import _ from 'lodash'

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
      transformResponse: (response: GetGraphRawResponse) => ({
        nodes: response.nodes,
        tags: _.countBy(_.compact(_.flatMap(response.nodes, 'tags'))),
      }),
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

interface Node {
  id: string
  tags: string[]
}

interface GetGraphRawResponse {
  nodes: Node[]
}

interface GetGraphResponse {
  nodes: Node[]
  tags: Record<string, number>
}
