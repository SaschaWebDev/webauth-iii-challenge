import React from 'react';

import axios from 'axios';

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    department: '',
  };

  handleChanges = event => {
    const { id, value } = event.target;

    this.setState({
      [id]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const server_path = 'http://localhost:5000/api/register';

    axios
      .post(server_path, this.state)
      .then(res => {
        // go to signin
        this.props.history.push('/signin');
      })
      .catch(error => {
        console.error(error);
      });
    this.setState({
      username: '',
      password: '',
      department: '',
    });
  };

  render() {
    return (
      <div>
        <h2>User Sign Up!</h2>
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
              style={{ maxWidth: '10rem' }}
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
              style={{ maxWidth: '10rem' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <label>Department: </label>
            <input
              id='department'
              type='text'
              value={this.state.department}
              onChange={this.handleChanges}
              style={{ maxWidth: '10rem' }}
            />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
