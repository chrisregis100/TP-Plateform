/* eslint-disable no-undef */
const nodemailer = require("nodemailer")

module.exports = async(email, subject, text,)=>{
  try {
    const transporter = nodemailer.createTransport({
      host:process.env.HOST,
      service:"gmail",
      post:Number(process.env.EMAIL_PORT),
      secure:Boolean(process.env.SECURE),
      auth:{
        user:'chrisregiskiki@gmail.com',
        pass:process.env.PASSWORD
      }
    })

    await transporter.sendMail({
      from:process.env.USER,
      to:email,
      subject:subject,
      text: text
    })

    console.log("email send successfully")

  } catch (error) {
    console.log("email non envoyé");
    console.log(error);
    
    
  }
}