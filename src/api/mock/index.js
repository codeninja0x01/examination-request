import tests from './data/tests'
import specimentType from './data/speciment_type'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchTests () {
    return fetch(tests, 1000) // wait 1s before returning tests
  },
  fetchSpecimentType () {
    return fetch(specimentType, 1000) // wait 1s before returning tests
  }
}