import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    sorting: null,
    value: '',
  };

  handleChange = value => {
    this.setState({
      value,
    });
    console.log('value: ', value);
    console.log('stateValue: ', this.state.value);
  };

  render() {
    const users = this.props.users
      .slice()
      .filter(user => user.name.toLowerCase().includes(this.state.value.toLowerCase()));
    console.log('users:', users);
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
