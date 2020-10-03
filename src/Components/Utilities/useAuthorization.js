import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authenticate, logout } from "../../Redux/Actions/userActions";

const useAuthorization = ({ authenticate, logout }) => {
  const authorize = () => {
    var token = localStorage.getItem("token");
    if (token) {
      var parsedToken = JSON.parse(token);
      if (parsedToken.expiration < Date.now()) {
        logout();
      } else {
        authenticate();
      }
    }
  };

  return { authorize };
};

const mapDispatchToProps = (dispatch) => ({
  authenticate: bindActionCreators(authenticate, dispatch),
  logout: bindActionCreators(logout, dispatch),
});

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(useAuthorization);
