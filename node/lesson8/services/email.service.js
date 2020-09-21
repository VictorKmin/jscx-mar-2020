const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const htmlTemplates = require('../email-templates');
const {ROOT_EMAIL, ROOT_EMAIL_PASSWORD, FRONTEND_URL} = require('../configs/config');

const emailTemplates = new EmailTemplates({
  message: null,
  views: {
    root: path.join(process.cwd(), 'email-templates')
  }
});

const transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: ROOT_EMAIL,
    pass: ROOT_EMAIL_PASSWORD
  }
});

module.exports = {
  sendMail: async (userMail, action, context) => {
    try {
      const templateInfo = htmlTemplates[action];
      const html = await emailTemplates.render(templateInfo.templateFileName, {...context, frontendUrl: FRONTEND_URL});

      const mailOptions = {
        from: 'NO REPLY CAR SHOP',
        to: userMail,
        subject: templateInfo.subject,
        html
      }

      return transporter.sendMail(mailOptions);
    } catch (e) {
      console.log('____________________________________')
      console.log(e)
      console.log('____________________________________')
    }

  }

}
