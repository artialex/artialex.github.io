import localforage from 'localforage'
import { Position } from '../@types/Position'
import { NoteId } from '../@types/Note'

class NoteLayoutService {
  notes = localforage.createInstance({ name: 'notes' })

  /**
   * Get all note ids
   *
   */
  async getAllNoteIds(): Promise<Array<NoteId>> {
    return await this.notes.keys()
  }

  /**
   * Get all note positions
   *
   */
  async getAllNotePositions(): Promise<Array<[NoteId, Position]>> {
    let record: Record<NoteId, Position> = {}

    for (const id of await this.notes.keys()) {
      record[id] = await this.getNotePosition(id)
    }

    return Object.entries(record)
  }

  /**
   * Get note position
   *
   */
  async getNotePosition(id: NoteId): Promise<Position> {
    let position = await this.notes.getItem<Position>(id)

    return position || (await this.setNotePosition(id, Position.Zero))
  }

  /**
   * Set note position
   *
   */
  async setNotePosition(id: NoteId, pos: Position) {
    return await this.notes.setItem(id, pos)
  }

  /**
   * Remove note position
   *
   */
  async removeNotePosition(id: NoteId) {
    return await this.notes.removeItem(id)
  }
}

export const NoteLayout = new NoteLayoutService()
