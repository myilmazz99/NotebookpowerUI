import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFeedback } from "../Redux/Actions/adminActions";
import Textarea from "./Utilities/Textarea";
import Input from "./Utilities/Input";
import useForm from "./Utilities/useForm";
import FeedbackValidation from "./Utilities/ValidationRules/FeedbackValidation";

const ContactForm = ({ addFeedback }) => {
  const { handleSubmit, handleChange, values, errors } = useForm(
    addFeedback,
    FeedbackValidation
  );

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
      <Textarea
        handleChange={handleChange}
        placeholder="Bize görüşünüzü bildirin..."
        name="feedbackText"
        value={values.feedback}
        error={errors.feedback}
      />
      <Input type="submit" value="Gönder" />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFeedback: bindActionCreators(addFeedback, dispatch),
});

export default connect(null, mapDispatchToProps)(ContactForm);
