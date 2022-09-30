import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { sandboxApi } from "./AxiosService.js"

class PostsService {
  async getPosts(page = 1) {
    AppState.posts = []
    const res = await sandboxApi.get('/api/posts', {
      params: {
        page
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
    let pageNum = res.data.page.split(' ', 1)
    pageNum = parseInt(pageNum, 10)
    AppState.page = pageNum
    AppState.lastpage = res.data.totalPages
  }
}
export const postsService = new PostsService()