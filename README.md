## ローカルでの起動方法

```bash
$ npm i
$ mkdir /tmp/postgresql
$ npm run start:db
$ npm run start:dev
```

## マイグレーション

- 空のマイグレーションファイル作成
  ```bash
  $ npm run migration:create <ファイル名>
  ```

- ソースコードのentityからマイグレーションファイルを作成
  ```bash
  $ npm run migration:generate <ファイル名>
  ```

- マイグレーションの実行
  ```bash
  $ npm run migration:run
  ```

- マイグレーションの実行状態の確認
  ```bash
  $ npm run migration:status
  ```

## swagger

```
http://localhost:3000/api
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
