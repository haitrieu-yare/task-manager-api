const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  try {
    sgMail.send({
      to: email,
      from: "haitrieu.yare@gmail.com",
      subject: "Welcome to Task App",
      text: `Thank you for joining in Task App, ${name}`,
    });
  } catch (error) {
    console.log(error);
  }
};

const sendCancellationEmail = (email, name) => {
  try {
    sgMail.send({
      to: email,
      from: "haitrieu.yare@gmail.com",
      subject: "Sorry to see you go!",
      text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
