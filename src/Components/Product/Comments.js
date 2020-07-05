import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Textarea from "../Utilities/Textarea";
import useForm from "../Utilities/useForm";
import { bindActionCreators } from "redux";
import { addComment } from "../../Redux/Actions/productActions";
import CommentValidation from "../Utilities/ValidationRules/CommentValidation";

const Comments = ({
  addComment,
  userReducer: { authenticated, userCredentials },
  productId,
  comments,
}) => {
  const [userHasComment, setUserHasComment] = useState(false);
  let { handleChange, handleSubmit, values, errors } = useForm(
    add,
    CommentValidation
  );

  useEffect(() => {
    if (comments && comments.find((i) => i.userId === userCredentials.userId)) {
      setUserHasComment(true);
    } else {
      setUserHasComment(false);
    }
  }, [comments, productId]);

  function add() {
    values.rating = parseInt(values.rating);
    productId = parseInt(productId);

    addComment(
      productId,
      userCredentials.userId,
      userCredentials.fullname,
      values
    );
  }

  return (
    <section className="comments">
      {authenticated && !userHasComment ? (
        <form onSubmit={handleSubmit}>
          <ul className="ratings">
            <li>
              <input
                type="radio"
                name="rating"
                value="1"
                onChange={handleChange}
              />
              <FontAwesomeIcon icon="star" />
            </li>
            <li>
              <input
                type="radio"
                name="rating"
                value="2"
                onChange={handleChange}
              />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </li>
            <li>
              <input
                type="radio"
                name="rating"
                value="3"
                onChange={handleChange}
              />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </li>
            <li>
              <input
                type="radio"
                name="rating"
                value="4"
                onChange={handleChange}
              />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </li>
            <li>
              <input
                type="radio"
                name="rating"
                value="5"
                onChange={handleChange}
              />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </li>
            <small style={{ color: "red" }}>
              {errors.rating && errors.rating}
            </small>
          </ul>
          <div>
            <Textarea
              placeholder="Yorumunuz..."
              name="commentText"
              handleChange={handleChange}
              error={errors.commentText}
              value={values.commentText}
            />
            <button>Gönder</button>
          </div>
        </form>
      ) : null}

      <ul className="comment-list">
        {comments &&
          comments.map((i) => (
            <li key={i.userId} className="comment">
              <p className="username">{i.username}</p>
              <time>02.02.2020</time>
              <p className="rating">
                {Array(i.rating)
                  .fill(<FontAwesomeIcon icon="star" />)
                  .map((i) => i)}
              </p>
              <p className="comment-text">{i.commentText}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};

const mapState = (state) => ({
  userReducer: state.userReducer,
});

const mapDispatch = (dispatch) => ({
  addComment: bindActionCreators(addComment, dispatch),
});

export default connect(mapState, mapDispatch)(Comments);
