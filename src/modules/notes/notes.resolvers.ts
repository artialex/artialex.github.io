import DataLoader from 'dataloader'
import type { Resolvers } from '@/notes/notes.types'
import _ from 'lodash'

export type NodeId = string
export type TagId = string

const loadGraph = (() => {
  let data: any
  return async function () {
    if (!data) {
      data = await fetch('/graph.json').then((r) => r.json())
    }

    return data as { data: any }
  }
})()

const notes = new DataLoader(async (notes) => {
  return notes.map((id) => {
    return fetch(`/notes/${id}.md`).then((r) => r.text().catch(() => null))
  })
})

export const notesResolvers: Resolvers = {
  Query: {
    async note(_, args) {
      const { data } = await loadGraph()

      return data.notes[args.id || 'Hi']
    },

    async notes() {
      const { data } = await loadGraph()

      const result = Object.values(data.notes)

      return _.orderBy(result, 'title')
    },

    async vaultLinks() {
      return []
    },

    async tag(_, args) {
      const { data } = await loadGraph()

      return data.tags[args.id || 'linal']
    },

    async tags() {
      const { data } = await loadGraph()
      const result = Object.values(data.tags)

      // return _.orderBy(result, 'prettyName')

      return _.orderBy(result, (r) => _.add(r.noteCount, r.vaultLinkCount), 'desc')
    },
  },
  Note: {
    title: async (parent) => {
      return parent.title || ''
    },
    content: async (parent) => {
      return (await notes.load(parent.title)) || ''
    },
    tags: async (parent) => {
      const { data } = await loadGraph()

      return (parent.tags || []).map((_) => data.tags[_]!)
    },
    backlinks: async (parent) => {
      const { data } = await loadGraph()

      return (parent.backlinks || []).map((_) => data.notes[_])
    },
  },
  Tag: {
    id: async (parent) => {
      return parent.id || ''
    },
    prettyName: async (parent) => {
      return parent.prettyName || ''
    },
    noteCount: async (parent) => {
      return parent.noteCount || 0
    },
    notes: async (parent) => {
      const { data } = await loadGraph()

      return (parent.notes || []).map((_) => data.notes[_])
    },
    vaultLinkCount: async (parent) => {
      return parent.vaultLinkCount || 0
    },
    vaultLinks: async (parent) => {
      const { data } = await loadGraph()

      return (parent.vaultLinks || []).map((_) => data.vaultLinks[_])
    },
  },
  VaultLink: {
    name: async (parent) => {
      return parent.name || ''
    },
    link: async (parent) => {
      return parent.link || ''
    },
    tags: async (parent) => {
      const { data } = await loadGraph()

      return (parent.tags || []).map((_) => data.tags[_]!)
    },
    comment: async (parent) => {
      return parent.comment || ''
    },
  },
}
