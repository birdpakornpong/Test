import HttpRequest from './http_request'

class BCvalue extends HttpRequest {
  constructor () {
    // api api
    super('http://www.localhost:3000')
  }

  async getBCvalue () {
    // example path https://api.myjson.com/bins/17k39m/
    const {data} = await this.get('/api/BCvalue')
    return data
  }
}

export default BCvalue