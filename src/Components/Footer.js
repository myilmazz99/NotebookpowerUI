import React from "react";
import Contact from "./Contact";
import useForm from "./Utilities/useForm";
import FeedbackValidation from "./Utilities/ValidationRules/FeedbackValidation";
import Textarea from "./Utilities/Textarea";
import Input from "./Utilities/Input";

const Footer = () => {
  const { handleSubmit, handleChange, values, errors } = useForm(
    () => console.log("eben"),
    FeedbackValidation
  );

  return (
    <footer>
      <section className="contact-ways">
        <form className="contact-form" onSubmit={handleSubmit}>
          <Textarea
            handleChange={handleChange}
            placeholder="Bize görüşünüzü bildirin..."
            name="feedback"
            value={values.feedback}
            error={errors.feedback}
          />
          <Input
            handleChange={handleChange}
            type="text"
            placeholder="Adınız ve Soyadınız"
            name="name"
            value={values.name}
            error={errors.name}
          />
          <Input
            handleChange={handleChange}
            type="email"
            placeholder="E-mail"
            name="email"
            value={values.email}
            error={errors.email}
          />
          <Input type="submit" value="Gönder" />
        </form>
        <Contact />
      </section>

      <section className="copyright">
        © 2019 Tüm hakları saklıdır. notebookpower.com <br />
        Web tasarım by myyilmaz.com
      </section>
    </footer>
  );
};

export default Footer;
