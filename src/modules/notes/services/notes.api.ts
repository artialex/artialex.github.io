export async function getNote(note: string): Promise<string> {
  return fetch('notes/' + note + '.md').then((r) => r.text())
}
