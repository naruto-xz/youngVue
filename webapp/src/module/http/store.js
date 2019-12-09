// module.exports = {
export default {
  getName() {
    return $http({
      url: '/static/data/test.json',
      type: 'get',
    })
  }
}
