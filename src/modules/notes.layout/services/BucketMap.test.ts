import { BucketMap } from './BucketMap'

describe('BucketMap', () => {
  /*  it('one entry', () => {
    let map = new BucketMap(100_000, 1000)

    map.add('A', { x: 0, y: 0 })

    expect(map.getAround({ x: 0, y: 0 })).toEqual(['A'])
    expect(map.getAround({ x: 20, y: 20 })).toEqual(['A'])
    expect(map.getAround({ x: 1001, y: 0 })).toEqual([])
    expect(map.getAround({ x: 0, y: 1000 })).toEqual([])
  })

  it('many entries', () => {
    let map = new BucketMap(100_000, 1000)

    map.add('A', { x: 0, y: 0 })
    map.add('B', { x: 20, y: 180 })
    map.add('C', { x: 20, y: 1000 })
    map.add('D', { x: 1000, y: 0 })

    expect(map.getAround({ x: 180, y: 280 })).toEqual(['A', 'B'])
    expect(map.getAround({ x: 1500, y: 500 })).toEqual(['D'])
    expect(map.getAround({ x: 500, y: 1500 })).toEqual(['C'])
  })
  */

  it('buckets', () => {
    let map = new BucketMap(100_000, 1000)

    /**
     * A B  | D   |
     *      |     |
     * -----|-----|----
     * C    |     |
     *      |     |
     * -----|-----|----
     *      |     |
     *      |     |
     */

    map.add('A', { x: 0, y: 0 })
    map.add('B', { x: 20, y: 180 })
    map.add('C', { x: 20, y: 1000 })
    map.add('D', { x: 1000, y: 0 })

    expect(map.getAround({ x: 500, y: 500 })).toEqual(['A', 'B', 'C', 'D'])
    expect(map.getAround({ x: 1500, y: 500 })).toEqual(['A', 'B', 'C', 'D'])
    expect(map.getAround({ x: 2500, y: 500 })).toEqual(['D'])
  })
})
