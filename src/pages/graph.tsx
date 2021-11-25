import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import graph from '../../public/graph'
import { style } from 'd3'
import { getRequestStatusFlags } from '@reduxjs/toolkit/dist/query/core/apiState'

type Node = {
  id: string
}

type Link = {
  source: string
  target: string
}

type Graph = {
  nodes: Node[]
  links: Link[]
}

type Options = any

function ForceGraph(graph: Graph) {
  // Compute values.
  console.log('graph :: 25', graph.nodes)

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

  // Construct the forces.
  const forceNode = d3.forceManyBody()
  const forceLink = d3.forceLink(links).id(({ index: i }) => N[i])
  // if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
  // if (linkStrength !== undefined) forceLink.strength(linkStrength);

  console.log('graph :: 52', nodes)

  const simulation = d3
    .forceSimulation(nodes)
    .force('link', forceLink)
    .force('charge', forceNode)
    .force('center', d3.forceCenter())
    .on('tick', ticked)

  const svg = d3
    .create('svg')
    .attr('width', outerWidth)
    .attr('height', outerHeight)
    .attr('viewBox', [-outerWidth / 2, -outerHeight / 2, outerWidth, outerHeight])
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')

  const link = svg
    .append('g')
    .attr('stroke', 'lightgray')
    .attr('stroke-opacity', '1')
    .attr('stroke-width', '1')
    .attr('stroke-linecap', '1')
    .selectAll('line')
    .data(links)
    .join('line')

  const node = svg
    .append('g')
    .attr('fill', 'red')
    .attr('stroke', 'blue')
    .attr('stroke-opacity', '1')
    .attr('stroke-width', '1')
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .style('fill', (_) => {
      if (_.tags?.includes('java')) {
        return 'blue'
      }
      if (_.tags?.includes('architecture')) {
        return 'orange'
      }
      return 'lightgray'
    })
    .attr('r', '4')

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
    link
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)

    node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
  }
  /*

  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }
  */

  return svg.node() // Object.assign(, {scales: {color}});
}

const Graph = () => {
  let ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.append(ForceGraph(graph))
  }, [])

  return <div ref={ref} />
}

export default Graph
