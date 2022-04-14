import { VFileWithOutput } from 'unified'
import { process } from '@/markdown'
import { NoteId } from '../@types/Note'

/**
 * Return note ids
 *
 */
export async function getNoteIds(): Promise<NoteId[]> {
  return fetch('graph.json')
    .then((_) => _.json())
    .then((_) => _.nodes.map((_: any) => _.id))
}

/**
 * Returns raw note
 * @todo: remove
 */
export async function getRawNote(id: NoteId): Promise<string> {
  return await fetch('notes/' + id + '.md').then((_) => _.text())
}

/**
 * Returns a note processed by markdown
 *
 */
export async function getProcessedNote(id: NoteId): Promise<VFileWithOutput<any>> {
  return await getRawNote(id).then(process)
}
