const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.GRID_KEY)

const sendEmailWelcome = (email, name) => {
    sgMail.send({
        to: email,
        from: 'muathuvang8880@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendEmailGoodBye = (email, name) => {
    sgMail.send({
        to: email,
        from: 'muathuvang8880@gmail.com',
        subject: 'Thanks for using our application',
        text: `We are so regret because your cancelling. ${name} Can you tell us about the reason why you leave?`
    })
}

module.exports = { sendEmailWelcome, sendEmailGoodBye }