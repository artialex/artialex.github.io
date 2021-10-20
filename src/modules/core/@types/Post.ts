export type PostId = number

export interface Post {
  id: PostId
  userId: number
  title: string
  body: string
}
