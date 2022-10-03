import { Account } from "./Account.js"

export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.creatorId = data.creatorId
    this.creator = new Account(data.creator)
    this.likeIds = data.likeIds
    this.imgUrl = data.imgUrl
    this.createdAt = new Date(data.createdAt).toDateString()
  }
}