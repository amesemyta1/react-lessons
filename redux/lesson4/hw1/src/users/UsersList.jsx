import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import User from './User';
import Pagination from './Pagination';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const usersPerPage = 3;
  const indexTo = currentPage * usersPerPage;
  const userList = users.slice(indexTo - usersPerPage, indexTo);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={usersPerPage}
      />

      <ul className="users">
        {userList.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: state.usersList,
  currentPage: state.currentPage,
});

const mapDispatch = {
  goNext: userActions.goNextPage,
  goPrev: userActions.goPrevPage,
};

const usersConnector = connect(mapState, mapDispatch);

export default usersConnector(UsersList);
