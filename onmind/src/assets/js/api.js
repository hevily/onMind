import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
window.axios = axios;

let HOST = null

if (process.env.NODE_ENV === 'development') {
  HOST = '/api';
} else {

}
const IS_NAME_REPEAT = HOST + '/u/isNameRepeat'
const REG = HOST + '/u/reg'
const VERIFY = HOST + '/u/verify'
const LOG = HOST + '/u/log'
const FORGET = HOST + '/u/forget'
const VERIFYFORGET = HOST + '/u/verifyForget'

const IS_Title_REPEAT = HOST + '/f/isTitleRepeat'
const ADD_FILE = HOST + '/f/add'
const FILE_LIST = HOST + '/f/list'
const DEL_FILE = HOST + '/f/delete'
const UPDATE_FILE = HOST + '/f/update'
const GET_FILEDATA = HOST + '/f/getData'

export function isNameRepeatApi(formData) {
  return axios.post(IS_NAME_REPEAT, formData)
}

export function regApi(formData) {
  return axios.post(REG, formData)
}

export function verifyApi(formData) {
  return axios.post(VERIFY, formData)
}

export function logApi(formData) {
  return axios.post(LOG, formData)
}

export function forgetApi(formData) {
  return axios.post(FORGET, formData)
}

export function verifyForgetApi(formData) {
  return axios.post(VERIFYFORGET, formData)
}

export function isTitleRepeatApi(formData) {
  return axios.post(IS_Title_REPEAT, formData)
}


export function addFileApi(formData) {
  return axios.post(ADD_FILE, formData)
}

export function fileListApi(formData) {
  return axios.post(FILE_LIST, formData)
}

export function delFileApi(formData) {
  return axios.post(DEL_FILE, formData)
}

export function updateFileApi(formData) {
  return axios.post(UPDATE_FILE, formData)
}

export function getFileDataApi(formData) {
  return axios.post(GET_FILEDATA, formData)
}