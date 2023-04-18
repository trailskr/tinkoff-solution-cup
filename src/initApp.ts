import './modules/dayjs'
import { UserModuleParams } from './UserModule'
import { install as head } from './modules/head'
import { install as i18n } from './modules/i18n'
import { install as nprogress } from './modules/nprogress'
import { install as query } from './modules/query'

export const initApp = (params: UserModuleParams): void => {
  [head, i18n, query, nprogress].forEach((install) => install(params))
}
