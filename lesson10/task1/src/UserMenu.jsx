/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import React from 'react';

const UserMenu = ({ userData }) => {
  if (!userData) {
    return null;
  }

  const { name, avatar_url } = userData;

  return (
    <div className="menu">
      <span className="menu__name">{name}</span>
      <img className="menu__avatar" src={avatar_url} alt="User avatar" />
    </div>
  );
};

export default UserMenu;
