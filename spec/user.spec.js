import { setActivePinia, createPinia } from 'pinia'
import { useAccountStore } from '../src/store/user';

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Login test valid', () => {
    const account = useAccountStore()

    expect(account.isAuth).toBe(false)
    account.loginUser('admin123456')
    expect(account.isAuth).toBe(true)
  })

  it('Logout test valid', () => {
    const account = useAccountStore()

    account.logoutUser()
    expect(account.isAuth).toBe(false)
  })

})