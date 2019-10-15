var express = require('express')
var router = express.Router()
// const { publicKey, privateKey } = require('../config')
const publicKey = 'da04e921347fec2dd933acf61f6d0f91'
const privateKey = '150e819600dcd75b284fd6df9c7e3362'

router.post('/sendmail', function(req, res, next) {
  res.set('Content-Type', 'application/json')
  const mailjet = require('node-mailjet').connect(publicKey, privateKey)
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'broccolidee@gmail.com',
          Name: 'Brock Duncan',
        },
        To: [
          {
            Email: 'brckdncn@gmail.com',
            Name: 'borrk',
          },
        ],
        Subject: 'Your email flight plan!',
        TextPart:
          'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
        HTMLPart:
          '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
      },
    ],
  })
  request
    .then(result => {
      console.log(result.body)
      res.send('sent!')
    })
    .catch(err => {
      console.log(err)
      res.send('error!')
    })
})

module.exports = router
