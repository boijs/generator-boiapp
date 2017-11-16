boi.mock('Get /api/test').params(['uid']).custom({
  jsonpCallback: 'callback'
}).response({
  success: {
    code: 200,
    msg: '请求成功',
    data: {
      a: 1
    }
  },
  fail: {
    code: 500,
    msg: '请求失败'
  }
});