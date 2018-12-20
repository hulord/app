import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Alert } from "antd";
import LoginForm from "components/LoginForm";


class LoginPage extends Component {
  state = {
    loading: false,
    loginError: null,
  };

  handleSubmit = login => (err, values) => {
    if (!err) {
      this.setState({ loading: true });
      login(values.username, values.password)
        .then(() => {
          this.props.history.replace("/");
        })
        .catch(() => {
          this.setState({
            loading: false,
            loginError: "Login failed. Please try again! 🙈",
          });
        });
    } 
  };

  renderMessage = content => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={content}
        type="error"
        showIcon
      />
    );
  };

  render() {
    return (
      <div>
          {({ login }) => (
              <LoginForm loading={this.state.loading} onSubmit={this.handleSubmit(login)} />
          )}
      </div>
    );
  }
}

export default LoginPage;
