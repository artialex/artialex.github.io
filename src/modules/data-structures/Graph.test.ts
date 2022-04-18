import { Graph } from './Graph'

describe('Graph', () => {
  describe('undirected', () => {
    it('should [have empty list] when [creating an empty graph]', () => {
      let graph = new Graph<string>()

      expect(graph.list()).toEqual({})
    })

    it('should [have list with one node] when [adding a node]', () => {
      let graph = new Graph<string>()

      graph.addNode('Alex')

      expect(graph.list()).toEqual({
        [JSON.stringify('Alex')]: JSON.stringify([]),
      })
    })

    it('should [have list with one node] when [adding a node]', () => {
      let graph = new Graph<{ name: string }>()
      let n1 = { name: 'Alex' }
      let n2 = { name: 'Joe' }
      let n3 = { name: 'Dia' }

      graph.addNode(n1)
      graph.addNode(n2)
      graph.addNode(n3)
      graph.addLink(n1, n2)
      graph.addLink(n2, n3)

      expect(graph.list()).toEqual({
        [JSON.stringify(n1)]: JSON.stringify([n2]),
        [JSON.stringify(n2)]: JSON.stringify([n1, n3]),
        [JSON.stringify(n3)]: JSON.stringify([n2]),
      })
    })
    it('should [work correctly] when [removing a link]', () => {
      let graph = new Graph<{ name: string }>()
      let n1 = { name: 'Alex' }
      let n2 = { name: 'Joe' }
      let n3 = { name: 'Dia' }

      graph.addNode(n1)
      graph.addNode(n2)
      graph.addNode(n3)

      graph.addLink(n1, n2)
      graph.addLink(n2, n3)
      graph.removeLink(n2, n1)

      expect(graph.list()).toEqual({
        [JSON.stringify(n1)]: JSON.stringify([]),
        [JSON.stringify(n2)]: JSON.stringify([n3]),
        [JSON.stringify(n3)]: JSON.stringify([n2]),
      })
    })
  })
  describe('directed', () => {
    it('should [have list with one node] when [adding a node]', () => {
      let graph = new Graph<{ name: string }>(Graph.DIRECTED)
      let n1 = { name: 'Alex' }
      let n2 = { name: 'Joe' }
      let n3 = { name: 'Dia' }

      graph.addNode(n1)
      graph.addNode(n2)
      graph.addNode(n3)

      graph.addLink(n1, n2)
      graph.addLink(n2, n3)

      expect(graph.list()).toEqual({
        [JSON.stringify(n1)]: JSON.stringify([n2]),
        [JSON.stringify(n2)]: JSON.stringify([n3]),
        [JSON.stringify(n3)]: JSON.stringify([]),
      })
    })
  })
})
