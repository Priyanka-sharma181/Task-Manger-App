const sgMail = require("@sendgrid/mail")
const sendGridApiKey = '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'
sgMail.setApiKey(sendGridApiKey)

const sendEmail = (name,email) => {
        sgMail.send({
            to:email,
            from:'priyankasharma7694074441@gmail.com',
            subject:'This is for joining',
            text:  `welcome to the app ${name}, let me know how along with the app`
        })
}

const sendEmailCancaltion = (name,email)=>{
    sgMail.send({
        to:email,
        from:'priyankasharma7694074441@gmail.com',
        subject:'sorry to see you go!',
        text:  `Good by ${name}, I hope see you sometime`
    })
}

module.exports = {
    sendEmail,
    sendEmailCancaltion
}