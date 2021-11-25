import nodemailer from "nodemailer";

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "xxxxx",
        pass: process.env.REACT_APP_SECRETKEY,
    },
});
export default function handler(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "tristan.derez@gmail.com",
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.status(400).json({
                status: "Erreur, votre message n'a pas pu être envoyé",
            });
        } else {
            res.status(200).json({ status: "Message envoyé" });
        }
    });
}
