import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    sorting: null,
    value: 'a',
  };

  handleChange = value => {
    this.setState({
      value,
    });
  };

  render() {
    const users = this.props.users
      .slice()
      .filter(user => user.name.toLowerCase().includes(this.state.value.toLowerCase()));

    return (
      <div>
        <Filter
          count={users.length}
          filterText={this.state.value}
          onChange={value => this.handleChange(value)}
        />
        <ul className="users">
          {users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;

/* <div>
  <button className="btn" onClick={this.toggleSorting}>
    {this.state.sorting || '-'}
  </button>
  <ul className="users">
    {usersList.map(user => (
      <User key={user.id} {...user} />
    ))}
  </ul>
</div>; */
