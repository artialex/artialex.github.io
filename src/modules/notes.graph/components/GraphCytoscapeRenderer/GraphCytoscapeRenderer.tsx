import { FC, useEffect, useRef, useState } from 'react'
import cytoscape from 'cytoscape'
import css from './GraphCytoscapeRenderer.module.scss'
import data from '../../../../../public/graph.json'
interface GraphCytoscapeRendererProps {}

cytoscape.use(require('cytoscape-cose-bilkent'))

let layoutOptions = {
  name: 'cose-bilkent',
  tile: false,
  fit: false,
  gravity: 0.01,
}

export const GraphCytoscapeRenderer: FC<GraphCytoscapeRendererProps> = (props) => {
  let ref = useRef<HTMLDivElement>(null)
  let cy: cytoscape.Core

  let [gravity, setGravity] = useState(0.1)

  useEffect(() => {
    cy = cytoscape({
      container: ref.current,
      elements: [
        ...data.nodes.map((node) => ({ data: node })),
        ...data.links.map((link) => ({
          data: {
            id: link.source + link.target,
            ...link,
          },
        })),
      ],
      style: [
        // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': 'black',
            width: 10,
            height: 10,
            label: 'data(id)',
          },
        },

        {
          selector: 'edge',
          style: {
            width: 1,
            'line-color': 'red',
            'target-arrow-color': 'red',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
          },
        },
      ],
      layout: layoutOptions,
      wheelSensitivity: 0.1,
    })
  }, [])

  useEffect(() => {
    cy.layout({
      ...layoutOptions,
      gravity,
    }).run()
  }, [gravity])

  return (
    <div>
      <input
        type="range"
        value={gravity}
        onChange={(event) => setGravity(Number(event.target.value))}
      />

      <div ref={ref} style={{ width: '100vw', height: '100vh' }} />
    </div>
  )
}
