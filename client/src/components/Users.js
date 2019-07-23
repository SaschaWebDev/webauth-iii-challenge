import React from 'react';
import axios from 'axios';
import withAuth from '../utility/withAuth';

class Users extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const server_path = 'http://localhost:5000/api/users';
    const requestConfig = {
      headers: {
        authorization: token,
      },
    };

    axios
      .get(server_path, requestConfig)
      .then(res => {
        console.log('RETURN', res);
        const users = res.data;
        this.setState(users);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <h2>The List of Users:</h2>
        {this.state.users &&
          this.state.users.map(user => (
            <p key={user.id}>
              <strong>{`${user.username}`} </strong>
              <br />
              {`from ${user.department || 'none'}`}
              <br />
              <br />
            </p>
          ))}
      </>
    );
  }
}

export default withAuth(Users);
