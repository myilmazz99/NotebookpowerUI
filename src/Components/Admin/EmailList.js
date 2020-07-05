import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEmails } from "../../Redux/Actions/adminActions";

const EmailList = ({ emails, getEmails }) => {
  useEffect(() => {
    if (emails && emails.length === 0) getEmails();
  }, []);

  return (
    <section id="email-list">
      <h1 className="mb-5">Email Listesi</h1>
      <div className="row">
        {emails &&
          emails.map((i, j) => (
            <div
              className={`col-5 mx-auto text-center alert alert-${
                j % 2 === 0 ? "success" : "warning"
              }`}
            >
              {i.email}
            </div>
          ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  emails: state.adminReducer.emails,
});

const mapDispatchToProps = (dispatch) => ({
  getEmails: bindActionCreators(getEmails, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);
