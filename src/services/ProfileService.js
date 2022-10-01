import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { sandboxApi } from "./AxiosService.js"

class ProfilesService {
  async getProfileById(id) {
    const res = await sandboxApi.get(`/api/profiles/${id}`)
    AppState.activeProfile = new Account(res.data)
  }
}

export const profilesService = new ProfilesService()