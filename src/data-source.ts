import { Comment } from './entity/comment.entity'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'fffk10',
  password: 'test', // TODO 仮置き
  database: 'application', // TODO 仮置き
  logging: true,
  synchronize: false,
  entities: [Comment],
  migrations: ['dist/migration/*.js'],
})

// 初期化
AppDataSource.initialize()
  .then(() => {
    console.log('DataSource has been initialized!')
  })
  .catch((error) => console.log(error))
