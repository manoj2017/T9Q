const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_KEY)

exports.handler = (event, context, callback) => {
  console.log(event)
  const { httpMethod, body } = event

  if (httpMethod !== 'POST') {
    return callback(null, { statusCode: 400, body: 'DO NOT TRY TO HACK' })
  }
  const { name = 'Not Given', email = 'Not Given', phoneNo = 'Not Given', message = 'Not Given', selectedServices = [] } = JSON.parse(body)

  const HTMLBody = `
    Name: <strong>${name}</strong> <br />
    Email: <strong>${email}</strong> <br />
    Phone: <strong>${phoneNo}</strong> <br />
    Message: <strong>${message}</strong> <br />
    Services: ${selectedServices.map(service => `<strong>${service}</strong>`)}
  `

  const msg = (email, name) => ({
    to: email,
    from: 'noreply@sraman.com',
    subject: 'Demo Requested',
    text: `${name} wants a demo`,
    html: HTMLBody
  })

  const emails = ['guptaarpit030@gmail.com', 'admin@theninequeens.com', 's.r.aman.sra@gmail.com']

  emails.map(email => sgMail.send(msg(email, name)))
  callback(null, {
    statusCode: 200,
    body: 'Email Done!'
  })
}
