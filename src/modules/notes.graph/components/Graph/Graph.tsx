import css from './Graph.module.scss'
import * as d3 from 'd3'
import { ReactSVGElement, useEffect, useRef, useState } from 'react'

import { GraphControls } from '../GraphControls'

import rawGraph from '../../../../../public/graph'
// import rawGraph from './test.json'
import { GraphD3Renderer } from '@/notes.graph/components/GraphD3Renderer'
// import { GraphSigmaRenderer } from '@/notes.graph/components/GraphSigmaRenderer'
import dynamic from 'next/dynamic'
// import { GraphCytoscapeRenderer } from '@/notes.graph'

/*

- Links
- Nodes
  - Labels
- Forces

- Drag Mechanics
- Zoom Mechanics
- Move Mechanics

*/

/*

function ForceGraph(graph: Graph) {
  // Compute values.
  const N = d3.map(graph.nodes, (_) => _.id).map(intern)
  const LS = d3.map(graph.links, (_) => _.source).map(intern)
  const LT = d3.map(graph.links, (_) => _.target).map(intern)

  // if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
  const T = d3.map(graph.nodes, (_, i) => N[i])
  // const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
  // const W = typeof linkStrokeWidth !== "function" ? null : d3.map(links, linkStrokeWidth);

  // Replace the input nodes and links with mutable objects for the simulation.
  let nodes = d3.map(graph.nodes, (_, i) => ({ id: N[i], tags: _.tags }))
  let links = d3.map(graph.links, (_, i) => ({ source: LS[i], target: LT[i] }))

  // Compute default domains.
  // if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

  // Construct the scales.
  // const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

  // -- Forces -------------------------------------------------------------------------------------
  // if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
  // if (linkStrength !== undefined) forceLink.strength(linkStrength);

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3
        .forceLink(links)
        .distance(50)

        .id(({ index: i }) => N[i])
    )
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(innerWidth / 2, innerHeight / 2))
    .force('collision', d3.forceCollide().radius(5).strength(1))
    .on('tick', ticked)

  const svg = d3
    .create('svg')
    .attr('class', 'root')
    .attr('width', innerWidth)
    .attr('height', innerHeight)
    .attr('viewBox', [-innerWidth / 2, -innerHeight / 2, innerWidth, innerHeight])
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')

  const link = svg //
    .append('g')
    .attr('class', css.links)
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('class', css.link)

  const node = svg
    .append('g')
    .attr('class', css.nodes)
    .selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .attr('class', css.node)
  // .call(drag(simulation))

  let dragHandler = d3
    .drag()

    .on('start', (event) => {
      if (!event.active) {
        simulation.alphaTarget(0.3).restart()
      }
      event.subject.fx = event.subject.x
      event.subject.fy = event.subject.y
    })
    .on('drag', (event) => {
      event.subject.fx = event.x
      event.subject.fy = event.y
    })
    .on('end', (event) => {
      if (!event.active) {
        simulation.alphaTarget(0)
      }

      event.subject.fx = null
      event.subject.fy = null
    })

  dragHandler(node)
  // drag(simulation)

  const circles = node //
    .append('circle')
    .attr('r', '4')

  const labels = node //
    .append('text')
    .attr('dx', 0)
    .attr('dy', 0)
    .text((n) => n.id)

  // node

  // node.append('text').text('Text')
  // .style('fill', (_) => {
  //   if (_.tags?.includes('java')) {
  //     return 'blue'
  //   }
  //   if (_.tags?.includes('architecture')) {
  //     return 'orange'
  //   }
  //   return 'lightgray'
  // })
  // .attr('r', '4')

  node.append('title').text(({ index }) => T[index])
  // .call(drag(simulation))

  // if (W) link.attr('stroke-width', ({ index: i }) => W[i])
  // if (G) node.attr('fill', ({ index: i }) => color(G[i]))
  // if (T) node.append('title').text(({ index: i }) => T[i])
  // if (invalidation != null) invalidation.then(() => simulation.stop())

  function intern(value: any) {
    return value !== null && typeof value === 'object' ? value.valueOf() : value
  }

  function ticked() {
    link //
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)

    node //
      .attr('transform', (d) => `translate(${d.x},${d.y})`)
  }

  /*
  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      event.subject.fx = event.subject.x
      event.subject.fy = event.subject.y
    }

    function dragged(event) {
      event.subject.fx = event.x
      event.subject.fy = event.y
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0)
      event.subject.fx = null
      event.subject.fy = null
    }

    return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)
  }

  return svg.node() // Object.assign(, {scales: {color}});
}

*/

export const Graph = () => {
  let [graph, setGraph] = useState(rawGraph)

  useEffect(() => {
    let newNodes = rawGraph.nodes.filter((_) => _.tags?.some((_) => ['fe', 'js'].includes(_)))
    let newNodeIds = newNodes.map((_) => _.id)
    let newLinks = rawGraph.links.filter((_) =>
      [_.source, _.target].every((n) => newNodeIds.includes(n))
    )

    let newGraph = {
      nodes: newNodes,
      links: newLinks,
    }

    setGraph(newGraph)
  }, [])
  /*
  const GraphCytoscapeRenderer = dynamic(
    import('../GraphCytoscapeRenderer').then((_) => _.GraphCytoscapeRenderer),
    {
      ssr: false,
    }
  )
*/

  return (
    <div className={css.root}>
      <GraphControls />
      {/*<GraphSigmaRenderer graph={rawGraph} />*/}
      {/*<GraphCytoscapeRenderer />*/}
      <GraphD3Renderer graph={rawGraph} />
    </div>
  )
}
