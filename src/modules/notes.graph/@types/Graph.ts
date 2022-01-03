import { Node } from './Node'
import { Link } from './Link'

export interface Graph {
  nodes: Node[]
  edges: Link[]
}
