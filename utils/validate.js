
/**
 * 邮箱校验
 * @param {*} email
 * @returns
 */
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * 随机数字
 * @param {*} min
 * @param {*} max
 */
export function randomNum(min,max){
  return Math.floor(Math.random()*(max-min)+min)
}
