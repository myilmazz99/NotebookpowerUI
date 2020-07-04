const CommentValidation = (values) => {
  let errors = {};

  if (!values.rating) errors.rating = "Puan seçmek zorunludur.";
  if (!values.commentText)
    errors.commentText = "Yorum alanını doldurmak zorunludur.";

  return errors;
};

export default CommentValidation;
