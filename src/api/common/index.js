import service from '../service'
export default {
  apiTest(id) {
    return service.get(`/api/test/${id}`).then(res => {
      return res
    })
  }
}
