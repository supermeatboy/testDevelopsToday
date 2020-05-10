// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type Post = {
  id: number
  title: string
  body: string
  comments?: Comment[]
}
export type Comment = {
  id: number
  postId: number
  body: string
}
export type ITodo = {
  title: string
  id: number
  completed: boolean
}