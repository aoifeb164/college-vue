/**
 * @Date:   2021-03-16T09:15:36+00:00
 * @Last modified time: 2021-03-16T09:22:40+00:00
 */
import axios from 'axios'

export default axios.create({
  baseURL: 'http://college.api:8000/api'
})


// export default {
//   sampleVar: "Hello"
// }
