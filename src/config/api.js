/**
 * @Date:   2021-03-16T09:15:36+00:00
 * @Last modified time: 2021-04-19T16:33:45+01:00
 */
import axios from 'axios'

export default axios.create({
  baseURL: 'https://college-api-aoife.herokuapp.com/api'
})


// export default {
//   sampleVar: "Hello"
// }
