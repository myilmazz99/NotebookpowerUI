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
      <div className="bg-primary shadow p-4 text-white">
        <h1>Email Listesi</h1>
      </div>
      <div className="p-4">
        {emails &&
          emails.map((i, j) => (
            <div
              key={j}
              className={`w-75 mp-info ${j % 2 === 0 ? "success" : "warning"}`}
              style={{ margin: "0 auto 1rem auto" }}
            >
              <div className="mp-info-body w-100 text-center">{i.email}</div>
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
