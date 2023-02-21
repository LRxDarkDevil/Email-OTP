  let mail = "RECEIVER_EMAIL_ADDRESS_HERE"
// Getting random code
  let code = Math.floor(Math
    .random() * (999999 - 100000 + 1)) + 100000;
//Importing HTML for email
  let html = fs.readFileSync("email.txt","utf8")
  html = html.replace("{replace}", code);
//Creating Transport
  let transporter = nodemailer.createTransport({
    host: "HOST_HERE",
    auth: {
      user: "EMAIL_ADDRESS_HERE", 
      pass: "PASSWORD_HERE",
    }
  });
  var mailOptions = {
    from: 'SENDER_EMAIL_ADDRESS_HERE',
    to: mail,
    subject: 'SUBJECT_HERE',
    html: html
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } 
  });
