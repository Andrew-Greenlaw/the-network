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
    console.log(res.data)
    page = res.data.page
    page.splice(0, 2).parsInt()
    console.log(page)
    // AppState.page = res.data.page.shift()

    console.log(AppState.posts)
  }
}
export const postsService = new PostsService()