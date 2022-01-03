import { useLoadGraph, useRegisterEvents, useSetSettings, useSigma } from 'react-sigma-v2'
import { useEffect, useState } from 'react'
import erdosRenyi from 'graphology-generators/random/erdos-renyi'
import randomLayout from 'graphology-layout/random'
import Graph, { UndirectedGraph } from 'graphology'
import { Attributes } from 'graphology-types'
import data from '../Graph/test.json'

export const MyGraph = ({ children }) => {
  let sigma = useSigma()
  let registerEvents = useRegisterEvents()
  let loadGraph = useLoadGraph()
  let setSettings = useSetSettings()

  const [hoveredNode, setHoveredNode] = useState()

  useEffect(() => {
    let graph = new Graph() // erdosRenyi(UndirectedGraph, { order: 100, probability: 0.2 })

    graph.import(data)

    // randomLayout.assign(graph)
    //
    // graph.nodes().forEach((node) => {
    //   graph.mergeNodeAttributes(node, {
    //     label: 'Node ' + Math.random(),
    //     size: Math.max(4, Math.random() * 10),
    //   })
    // })

    loadGraph(graph)

    // useEffect(() => {
    setSettings({
      nodeReducer: (node, data) => {
        const graph = sigma.getGraph()
        const newData: Attributes = { ...data, highlighted: data.highlighted || false }

        if (hoveredNode) {
          if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) {
            newData.highlighted = true
          } else {
            newData.color = '#E2E2E2'
            newData.highlighted = false
          }
        }
        return newData
      },
      edgeReducer: (edge, data) => {
        const graph = sigma.getGraph()
        const newData = { ...data, hidden: false }

        if (hoveredNode && !graph.extremities(edge).includes(hoveredNode)) {
          newData.hidden = true
        }
        return newData
      },
    })
    // }, [hoveredNode]);
  }, [])

  return <>{children}</>
}
