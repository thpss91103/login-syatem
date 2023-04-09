const userList = require('./userList.json')
const User = require('../userList')
const db = require('../../config/mongoose')

db.once('open', () => {
  const len = userList.length
  for (let i = 0; i < len; i++) {
    User.create({
      firstName: userList[i].firstName,
      email: userList[i].email,
      password: userList[i].password
    })
  }
  console.log('Created')
})