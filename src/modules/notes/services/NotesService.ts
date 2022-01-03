import { VFileWithOutput } from 'unified'
import { process } from '@/markdown'
import { NoteId } from '../@types/Note'

class NotesService {
  /**
   * Return note ids
   *
   */
  async getNoteIds(): Promise<Array<NoteId>> {
    return fetch('graph.json')
      .then((_) => _.json())
      .then((_) => _.nodes.map((_: any) => _.id))
  }

  /**
   * Returns raw note
   *
   */
  async getRawNote(id: NoteId): Promise<string> {
    return await fetch('notes/' + id + '.md').then((_) => _.text())
  }

  /**
   * Returns a note processed by markdown
   *
   */
  async getProcessedNote(id: NoteId): Promise<VFileWithOutput<any>> {
    return await this.getRawNote(id).then(process)
  }
}

export const Notes = new NotesService()
