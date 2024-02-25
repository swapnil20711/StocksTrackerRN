import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './model/schema'
import migrations from './model/migrations'
import Stock from './model/Stock'
const adapter = new SQLiteAdapter({
  schema,
  migrations,
  onSetUpError: error => {
    console.log('====================================')
    console.log(error)
    console.log('====================================')
  }
})
export const database = new Database({
  adapter,
  modelClasses: [
    Stock
  ],
})