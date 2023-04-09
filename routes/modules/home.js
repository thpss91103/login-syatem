const express = require('express')
const router = express.Router()
const userList = require('../../models/userList')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const email = req.body.email
  const pwd = req.body.password
  const error = 'Your email or password is fail.'

  userList.findOne({ email })
    .lean()
    .then(data => {
      if (data === null) {
        return res.render('index', { error, email })
      }
      if (data.password === pwd) {
        return res.render('user', {name: data.firstName})
      } else {
        return res.render('index', { error, email})
      }
    })
})

module.exports = router