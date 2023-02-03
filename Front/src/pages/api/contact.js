import sgMail from "@sendgrid/mail";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "INVALID_METHOD" });
    return;
  }

  const { firstname, lastname, email, message } = req.body;

  if (!firstname || !lastname || !email || !message) {
    res.status(400).json({ message: "INVALID_PARAMETER" });
    return;
  }

  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    res.status(400).send({
      message: "EMAIL_SYNTAX_INCORRECT",
    });
    return;
  }

  const contenu = message
    .replace(/\n/g, "<br>")
    .replace(/\r/g, "<br>")
    .replace(/\t/g, "<br>")
    .replace(/<(?!br\s*\/?)[^>]+>/g, "");

  sgMail.setApiKey(process.env.KEY_SENDGRID);

  const sendGridMail = {
    to: "nowak.louis@gmail.com",
    from: "nowak.louis@gmail.com",
    templateId: "d-0c21360c459f4b6a83d6a401de8375c5",
    dynamic_template_data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: contenu,
    },
  };

  (async () => {
    try {
      await sgMail.send(sendGridMail);
      res.status(200).json({ message: "ERROR_SENDED" });
    } catch {
      res.status(500).json({ message: "ERROR_WITH_SENDGRID" });
      return;
    }
  })();
}
