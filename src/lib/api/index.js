import axios from 'axios'

/** axios 설정 */
const config = {
    baseURL : 'https://codingapple1.github.io',
    headers : {
        get : {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        }
    }
}
export default config;