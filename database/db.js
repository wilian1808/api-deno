import { Client } from 'https://deno.land/x/mysql/mod.ts'

class Database {
  constructor() {
    this.connect()
  }

  async connect() {
    this.client = new Client().connect({
      hostname: '127.0.0.1',
      username: 'root',
      db: 'apideno',
      password: ''
    })

    await this.client.connect()
  }
}

export default new Database().client
