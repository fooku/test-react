import axios from 'axios'

const BASE_URL = 'https://api.github.com'

const fetchUsername = username => {
  const URL = BASE_URL + '/users/' + username

  return axios
    .get(URL)
    .then(res => res.data)
    .catch(err => Promise.reject(err))
}

const fetchUserRepo = username => {
  const URL = BASE_URL + '/users/' + username + '/repos'

  return axios
    .get(URL)
    .then(res => res.data)
    .catch(err => Promise.reject(err))
}

const searchUsername = username => {
  const URL = BASE_URL + '/search/users?q=' + username + '&per_page=32'

  return axios
    .get(URL)
    .then(res => res.data)
    .catch(err => Promise.reject(err))
}

export default {
  fetchUsername,
  fetchUserRepo,
  searchUsername
}
