import { process } from '@/markdown'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export let notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),

  endpoints: (builder) => ({
    getNoteIds: builder.query<any, void>({
      query: () => `graph.json`,
      transformResponse: (response: { nodes: any[] }) => {
        console.log('notes.api :: 12', response)

        return response.nodes.map((node) => node.id)
      },
    }),
    getProcessedNoteById: builder.query({
      query: (id) => ({
        url: `notes/${id}.md`,
        headers: {
          'content-type': 'text/plain',
        },
        responseHandler: 'text',
      }),

      // transformResponse: process,
    }),
  }),
})

export let { useGetProcessedNoteByIdQuery, useGetNoteIdsQuery } = notesApi
