import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFeedbacks } from "../../Redux/Actions/adminActions";

const Feedbacks = ({ feedbacks, getFeedbacks }) => {
  useEffect(() => {
    if (feedbacks && feedbacks.length === 0) getFeedbacks();
  }, []);

  return (
    <div id="feedbacks">
      <h1 className="mb-5">Müşteri Mesajları</h1>
      <div className="row">
        {feedbacks &&
          feedbacks.map((i, j) => (
            <dl
              key={i.id}
              className={`col-10 mx-auto p-3 alert alert-${
                j % 2 === 0 ? "success" : "warning"
              }`}
            >
              <dt>Müşteri Adı :</dt>
              <dd>{i.name}</dd>
              <dt>Müşteri Emaili :</dt>
              <dd>{i.email}</dd>
              <dt>Mesajı :</dt>
              <dd>{i.feedbackText}</dd>
            </dl>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  feedbacks: state.adminReducer.feedbacks,
});

const mapDispatchToProps = (dispatch) => ({
  getFeedbacks: bindActionCreators(getFeedbacks, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedbacks);
