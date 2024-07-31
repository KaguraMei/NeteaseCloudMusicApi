// 视频评论

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    rid: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
    beforeTime: query.before || 0,
  }
  return request(
    'POST',
    `/api/v1/resource/comments/R_VI_62_${query.id}`,
    data,
    createOption(query, 'weapi'),
  )
}
