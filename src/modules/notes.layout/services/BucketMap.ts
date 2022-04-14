import { Position } from '@/notes'

export class BucketMap<K> {
  items = new Map<K, Position>()
  buckets = new Map<string, K[]>()

  constructor(private size: number, private step: number) {}

  add(key: K, position: Position) {
    this.items.set(key, position)

    let bucketKey = this.getBucketKey(position)

    if (this.buckets.has(bucketKey)) {
      this.buckets.get(bucketKey)!.push(key)
    } else {
      this.buckets.set(bucketKey, [key])
    }
  }

  getAround(position: Position): K[] {
    let result = []

    for (let key of this.getBucketKeysAround(position)) {
      if (this.buckets.has(key)) {
        result.push(...this.buckets.get(key)!)
      }
    }

    return result
  }

  private getBucket(position: Position): K[] {
    let bucketKey = this.getBucketKey(position)

    if (this.buckets.has(bucketKey)) {
      return this.buckets.get(bucketKey)!
    }

    return []
  }

  private getBucketKey(position: Position): string {
    let x = Math.floor(position.x / this.step)
    let y = Math.floor(position.y / this.step)

    return `${x}-${y}`
  }

  private getBucketKeysAround(position: Position): string[] {
    let x = Math.floor(position.x / this.step)
    let y = Math.floor(position.y / this.step)

    let result = []
    let len = this.size / this.step

    for (let _x = x - 1; _x <= x + 1; _x++) {
      for (let _y = y - 1; _y <= y + 1; _y++) {
        if (_x >= 0 && _y >= 0 && x < len && y < len) {
          result.push(`${_x}-${_y}`)
        }
      }
    }

    console.log('BucketMap :: 70', result)

    return result
  }
}
