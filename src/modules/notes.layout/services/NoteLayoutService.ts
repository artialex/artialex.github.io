import localforage from 'localforage'
import { NoteId } from '@/notes/@types/Note'
import { Position } from '../@types/Posiiton'

interface NoteLayout {}

class NoteLayoutService {
  SIZE = 100_000
  STEP = 1000

  noteMap = new Map<NoteId, Position>()
  bucketMap = new Map<string, NoteId[]>()

  repository = localforage.createInstance({ name: 'notes' })

  async initialize() {
    for (let key of await this.repository.keys()) {
      let position = await this.repository.getItem<Position>(key)

      // await this.setNotePosition()
      this.noteMap.set(key, position!)
      this.bucketMap.set()
    }
  }

  /**
   * Set note position
   *
   */
  async setNotePosition(id: NoteId, position: Position): Promise<void> {
    this.noteMap.set(id, position)

    let bucketKey = this._getBucketKey(position)

    if (this.bucketMap.has(bucketKey)) {
      this.bucketMap.get(bucketKey)!.push(id)
    } else {
      this.bucketMap.set(bucketKey, [id])
    }

    await this.repository.setItem(id, position)
  }

  /**
   * Get all note ids
   *
   */
  async getNoteIds(): Promise<NoteId[]> {
    return await this.repository.keys()
  }

  /**
   * Get all note positions
   *
   */
  async getAllNotePositions(): Promise<[NoteId, Position][]> {
    let record: Record<NoteId, Position> = {}

    for (const id of await this.repository.keys()) {
      record[id] = await this.getNotePosition(id)
    }

    return Object.entries(record)
  }

  /**
   * Get note position
   *
   */
  async getNotePosition(id: NoteId): Promise<Position> {
    let position = await this.repository.getItem<Position>(id)

    return position || (await this.setNotePosition(id, Position.Zero))
  }

  /**
   * Remove note position
   *
   */
  async removeNotePosition(id: NoteId) {
    await this.repository.removeItem(id)
  }

  private _getBucketKey(position: Position): string {
    let x = Math.floor(position.x / this.STEP)
    let y = Math.floor(position.y / this.STEP)

    return `${x}-${y}`
  }

  private _getBucketKeyAround(position: Position): string[] {
    let x = Math.floor(position.x / this.STEP)
    let y = Math.floor(position.y / this.STEP)

    let result = []
    let len = this.SIZE / this.STEP

    for (let _x = x - 1; _x <= x + 1; _x++) {
      for (let _y = y - 1; _y <= y + 1; _y++) {
        if (_x >= 0 && _y >= 0 && x < len && y < len) {
          result.push(`${_x}-${_y}`)
        }
      }
    }

    return result
  }
}

export const NoteLayout = new NoteLayoutService()
