import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { sandboxApi } from "./AxiosService.js"

class PostsService {
  async getPosts() {
    AppState.posts = []
    const res = await sandboxApi.get('/api/posts')
    AppState.posts = res.data.posts.map(p => new Post(p))
    console.log(AppState.posts)
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }
  async getPostsByCreatorId(creatorId) {
    AppState.posts = []
    const res = await sandboxApi.get(`/api/profiles/${creatorId}/posts`)
    AppState.posts = res.data.posts.map(p => new Post(p))

    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }
  async changePage(pageUrl) {
    const res = await sandboxApi.get(pageUrl)
    // why can not use map?
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }
  // NOTE maybe need another parameter for pages????
  async getPostsBySearchTerm(term, page = 1) {
    const res = await sandboxApi.get('/api/posts', {
      params: {
        query: term,
        page
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
    AppState.term = term
  }
}
export const postsService = new PostsService()