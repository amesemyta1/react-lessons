import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

const Users = ({ users, createUser, deleteUser }) => {
  const onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    createUser(newUser);
  };

  return (
    <div className="users">
      <button onClick={() => onUserCreate()} className="users__create-btn">
        Create user
      </button>
      <ul className="users__list">
        {users.map(user => (
          <li key={user.id} className="users__list-item">
            <span>{user.name}</span>
            <button onClick={() => deleteUser(user.id)} className="users__delete-btn">
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: state.usersList,
});

const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

export default connector(Users);
