export class Graph<T> {
  static DIRECTED = Symbol('directed graph')
  static UNDIRECTED = Symbol('undirected graph')

  _nodes = new Map<T, Node<T>>()

  constructor(public direction = Graph.UNDIRECTED) {}

  addNode(value: T): Node<T> {
    if (this._nodes.has(value)) {
      return this._nodes.get(value)!
    } else {
      let node = new Node(value)
      this._nodes.set(value, node)
      return node
    }
  }

  addLink(source: T, target: T) {
    if (!this._nodes.has(source) || !this._nodes.has(target)) {
      throw new Error("Node doesn't exist")
    }

    let sourceNode = this._nodes.get(source)!
    let targetNode = this._nodes.get(target)!

    sourceNode.connect(targetNode)

    if (this.direction === Graph.UNDIRECTED) {
      targetNode.connect(sourceNode)
    }
  }

  removeLink(source: T, target: T) {
    if (!this._nodes.has(source) || !this._nodes.has(target)) {
      throw new Error("Node doesn't exist")
    }

    // TypeScript Map typesafe get

    let sourceNode = this._nodes.get(source)!
    let targetNode = this._nodes.get(target)!

    if (!sourceNode.isConnected(targetNode)) {
      throw new Error("Link doesn't exist")
    }

    sourceNode.disconnect(targetNode)

    if (this.direction === Graph.UNDIRECTED) {
      targetNode.disconnect(sourceNode)
    }
  }

  list() {
    let result: Record<any, any> = {}

    for (let [value, node] of this._nodes.entries()) {
      result[JSON.stringify(value)] = JSON.stringify(
        Array.from(node.getConnected()).map((_) => _.value)
      )
    }

    return result
  }
}

class Node<T> {
  private adjacentNodes: Set<Node<T>> = new Set()

  constructor(public value: T) {}

  connect(node: Node<T>) {
    this.adjacentNodes.add(node)
  }

  disconnect(node: Node<T>) {
    this.adjacentNodes.delete(node)
  }

  getConnected() {
    return this.adjacentNodes
  }

  isConnected(node: Node<T>) {
    return this.adjacentNodes.has(node)
  }
}

let graph = new Graph()
