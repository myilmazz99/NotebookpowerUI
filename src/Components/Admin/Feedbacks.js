import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFeedbacks } from "../../Redux/Actions/adminActions";

const Feedbacks = ({ feedbacks, getFeedbacks }) => {
  useEffect(() => {
    if (feedbacks && feedbacks.length === 0) getFeedbacks();
  }, []);

  return (
    <>
      <div className="bg-primary shadow p-4 text-white">
        <h1>Müşteri Mesajları</h1>
      </div>
      <div className="p-4">
        {feedbacks &&
          feedbacks.map((i, j) => (
            <dl
              key={j}
              className={`mp-info mb-1 ${j % 2 === 0 ? "success" : "warning"}`}
            >
              <div className="mp-info-body">
                <dt>Müşteri Adı :</dt>
                <dd>{i.name}</dd>
                <dt>Müşteri Emaili :</dt>
                <dd>{i.email}</dd>
                <dt>Mesajı :</dt>
                <dd>{i.feedbackText}</dd>
              </div>
            </dl>
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  feedbacks: state.adminReducer.feedbacks,
});

const mapDispatchToProps = (dispatch) => ({
  getFeedbacks: bindActionCreators(getFeedbacks, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedbacks);
