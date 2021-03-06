import axios from 'axios'

const route = route => `/api/user/${route}`

const api = {
  demoLogIn () {
    return new Promise((resolve, reject) => {
      axios.post(route('demo-login'), {}).then(response => {
        resolve(response.data)
      }, () => {
        reject()
      })
    })
  },
  logIn ({ email, password, captchaResponse }) {
    return new Promise((resolve, reject) => {
      axios.post(route('login'), { email, password, captchaResponse }).then(response => {
        resolve(response.data)
      }, () => {
        reject()
      })
    })
  },
  signUp ({ about, email, password, captchaResponse }) {
    return new Promise((resolve, reject) => {
      axios.post(route('signup'), { about, email, password, captchaResponse }).then(response => {
        resolve(response.data)
      }, () => {
        reject()
      })
    })
  }
}

export default api
