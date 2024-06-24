// 红心与取消红心歌曲

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.like = query.like == 'false' ? false : true
  const data = {
    alg: 'itembased',
    trackId: query.id,
    like: query.like,
    time: '3',
  }
  return request('POST', `https://music.163.com/api/radio/like`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
