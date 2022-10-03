import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { sandboxApi } from "./AxiosService.js"

class PostsService {
  async getPosts() {
    AppState.posts = []
    const res = await sandboxApi.get('/api/posts/')
    AppState.posts = res.data.posts.map(p => new Post(p))
    // console.log(AppState.posts)
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
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }
  // NOTE maybe need another parameter for pages????
  async getPostsBySearchTerm(term) {
    const res = await sandboxApi.get('/api/posts', {
      params: {
        query: term
      }
    })
    console.log(res)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
    AppState.term = term
  }
  async createPost(formData) {
    const res = await sandboxApi.post('/api/posts', formData)
    console.log(res.data)
    AppState.posts = [new Post(res.data), ...AppState.posts]

  }
  async deletePost(id) {
    await sandboxApi.delete(`/api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }
  async toggleLike(id) {
    const res = await sandboxApi.post(`/api/posts/${id}/like`)
    let post = AppState.posts.findIndex(p => p.id == id)
    AppState.posts.splice(post, 1, new Post(res.data))
  }
}
export const postsService = new PostsService()