// import { useEffect, useRef } from 'react'
// import Sigma from 'sigma'
// import ForceSupervisor from 'graphology-layout-force/worker'
// import Graph from 'graphology'
import React from 'react'
import type { Graph as TGraph } from '../../@types/Graph'
import 'react-sigma-v2/lib/react-sigma-v2.css'
import dynamic from 'next/dynamic'
// import css from './GraphSigmaRenderer.module.scss'

// import data from '../test.json'

interface GraphSigmaRendererProps {
  graph: TGraph
}

const isBrowser = () => typeof window !== 'undefined'

export const GraphSigmaRenderer = (props: GraphSigmaRendererProps) => {
  /*

  useEffect(() => {
    async function run() {
      if (typeof window !== 'undefined' && ref.current) {
        let graph = new Graph()

        // console.log('GraphSigmaRenderer :: 20', props.graph)

        // graph.import(props.graph)

        graph.nodes().forEach((node, i) => {
          graph.setNodeAttribute(node, 'label', 'YEA')
          graph.setNodeAttribute(node, 'size', 10)
          const angle = (i * 2 * Math.PI) / graph.order
          graph.setNodeAttribute(node, 'x', 100 * Math.cos(angle))
          graph.setNodeAttribute(node, 'y', 100 * Math.sin(angle))
        })
        // props.graph.nodes.forEach((node, i) => {
        //   console.log('GraphSigmaRenderer :: 21', i, node)
        //   graph.addNode(node, { label: node.key })
        //   console.log(
        //     'GraphSigmaRenderer :: 27',
        //     angle,
        //     100 * Math.cos(angle),
        //     100 * Math.sin(angle)
        //   )
        // })

        // console.log('GraphSigmaRenderer :: 31', graph)
        // props.
        //
        // console.log('GraphSigmaRenderer :: 26', graph)
        let Sigma = await import('sigma').then((_) => _.Sigma)

        // const FA2Layout = require('graphology-layout-forceatlas2/worker')
        // const forceAtlas2 = require('graphology-layout-forceatlas2')
        //
        // const sensibleSettings = forceAtlas2.inferSettings(graph)
        // const fa2Layout = new FA2Layout(graph, {
        //   settings: sensibleSettings,
        // })
        // fa2Layout.start()

        // console.log('GraphSigmaRenderer :: 30', Sigma)
        let renderer = new Sigma(graph, ref.current, {
          renderEdgeLabels: true,
        })

        let layout = new ForceSupervisor(graph)

        layout.start()
      }
    }

    void run()
  }, [])
  */

  if (isBrowser()) {
    const SigmaContainer = dynamic(
      import('react-sigma-v2').then((_) => _.SigmaContainer),
      {
        ssr: false,
      }
    )
    const ControlsContainer = dynamic(
      import('react-sigma-v2').then((_) => _.ControlsContainer),
      {
        ssr: false,
      }
    )
    const ZoomControl = dynamic(
      import('react-sigma-v2').then((_) => _.ZoomControl),
      {
        ssr: false,
      }
    )
    const ForceAtlasControl = dynamic(
      import('react-sigma-v2').then((_) => _.ForceAtlasControl),
      {
        ssr: false,
      }
    )
    const MyGraph = dynamic(
      import('./Graph').then((_) => _.MyGraph),
      {
        ssr: false,
      }
    )

    return (
      <SigmaContainer>
        <MyGraph />
        <ControlsContainer position="bottom-right">
          <ZoomControl />
          <ForceAtlasControl autoRunFor={100} />
        </ControlsContainer>
      </SigmaContainer>
    )
  } else {
    return null
  }
}
