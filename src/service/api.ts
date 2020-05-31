import axios from 'axios'
export const getArticle = async () => {
  const res = await axios.get(
    'http://rap2.taobao.org:38080/app/mock/255316/13.com'
  )
  return res
}
