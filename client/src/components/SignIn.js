import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChanges = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const server_path = 'http://localhost:5000/api/login';

    axios
      .post(server_path, this.state)
      .then(res => {
        console.log('RESSSSSS', res);
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/users');
      })
      .catch(error => {
        console.error(error);
      });
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <>
        <h2>User Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <label>Username: </label>
            <input
              id='username'
              type='text'
              value={this.state.username}
              onChange={this.handleChanges}
              required
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <label>Password: </label>
            <input
              id='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChanges}
              required
            />
          </div>
          <button type='submit'>Sign In</button>
        </form>
      </>
    );
  }
}

export default SignIn;
