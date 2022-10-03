import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop.js'
import { sandboxApi } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await sandboxApi.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async editAccount(formData) {
    const res = await sandboxApi.put('/account', formData)
    AppState.account = new Account(res.data)
    // console.log('[editAccoount]', res.data)
  }
}

export const accountService = new AccountService()
