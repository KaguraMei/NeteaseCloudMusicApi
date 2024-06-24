// 相关视频

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
    type: /^\d+$/.test(query.id) ? 0 : 1,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/cloudvideo/v1/allvideo/rcmd`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
