import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import { Graph } from '../../@types/Graph'
import css from './GraphD3Renderer.module.scss'

interface GraphD3RendererProps {
  graph: Graph
}

export const GraphD3Renderer = ({ graph }: GraphD3RendererProps) => {
  let ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // -- Values -----------------------------------------------------------------------------------

    const N = d3.map(graph.nodes, (_) => _.id).map(intern)
    const LS = d3.map(graph.links, (_) => _.source).map(intern)
    const LT = d3.map(graph.links, (_) => _.target).map(intern)
    const T = d3.map(graph.nodes, (_, i) => N[i])

    const nodes = d3.map(graph.nodes, (_, i) => ({ id: N[i], tags: _.tags }))
    const links = d3.map(graph.links, (_, i) => ({ source: LS[i], target: LT[i] }))

    // -- Forces -----------------------------------------------------------------------------------

    const forces = d3 //
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(links) //
          .id(({ index: i }) => N[i])
          .distance(20)
        // .strength(0.1)
      )
      .force(
        'charge',
        d3
          .forceManyBody() //
          .strength(-600)
        // .distanceMin(30)
        // .distanceMax(500)
      )
      .force(
        'center',
        d3.forceCenter() //
      )
      // .force('Y', d3.forceY(0.01))
      .force(
        'collision',
        d3
          .forceCollide() //
          .strength(0.1)
          .radius(20)
      )
      .on('tick', onTick)

    const svg = d3 //
      .select(ref.current)
      .append('svg')
      .attr('width', innerWidth)
      .attr('height', innerHeight)
      .attr('viewBox', [-innerWidth / 2, -innerHeight / 2, innerWidth, innerHeight])
      .call(
        d3
          .zoom()
          .extent([
            [0, 0],
            [innerWidth, innerHeight],
          ])
          .scaleExtent([0.5, 2])
          .on('zoom', onZoom)
      )
      .append('g')
    // const g = svg.append('g')

    // -- Links ------------------------------------------------------------------------------------

    const link = svg
      .append('g')
      .attr('class', css.links)
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('class', css.link)

    // -- Nodes ------------------------------------------------------------------------------------

    const node = svg
      .append('g')
      .attr('class', css.nodes)
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', css.node)

    const circle = node //
      .append('circle')
      .attr('r', '3')
      .attr('stroke', '#fdc5c5')
      .attr('stroke-width', '2')

    const label = node //
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12')
      .attr('dominant-baseline', 'middle')
      .text((_) => _.id)
      .call(function (_) {
        return _.each(function (d) {
          d.bbox = this.getBBox()
        })
      })

    node
      .insert('rect', 'text') //
      .attr('width', (_) => _.bbox.width)
      .attr('height', (_) => _.bbox.height)
      .attr('x', (_) => -_.bbox.width / 2)
      .attr('y', (_) => -_.bbox.height / 2)
      .attr('rx', '2px')
      // .style('fill', 'red')
      .style('fill', 'rgba(236,238,243,0.7)')

    // -- Handlers ---------------------------------------------------------------------------------

    function onTick() {
      link //
        .attr('x1', (_) => _.source.x)
        .attr('y1', (_) => _.source.y)
        .attr('x2', (_) => _.target.x)
        .attr('y2', (_) => _.target.y)

      node //
        .attr('transform', (d) => `translate(${d.x},${d.y})`)
    }

    function onZoom({ transform }) {
      svg.attr('transform', transform)
    }
  }, [])

  return <div ref={ref} className={css.root} />
}
