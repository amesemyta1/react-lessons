import React from 'react';
import Moment from 'react-moment';

const calculateAge = birthday => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const Profile = props => {
  return (
    <div>
      <p className="profile__name">
        {props.firstName} {props.lastName}
      </p>
      <p className="profile__birth">
        Was born <Moment format="DD MMM YY">{props.birthDate}</Moment> in {props.birthPlace}
      </p>
    </div>
  );
};

export default Profile;
