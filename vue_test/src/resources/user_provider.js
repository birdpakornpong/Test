
import HttpRequest from './http_request'

class UserProvider extends HttpRequest {
  constructor () {
    // api api
    super('http://www.localhost:3000')
  }

  async getUser () {
    // example path https://api.myjson.com/bins/17k39m/
    const {data} = await this.get('/api/XYZvalue')
    return data
  }
}

export default UserProvider