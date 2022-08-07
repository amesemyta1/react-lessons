import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const Profile = props => {
  return (
    <div>
      <div className="profile__name">
        {props.firstName} {props.lastName}
      </div>
      <div className="profile__birth">
        Was born <Moment format="DD MMM YY">{props.birthDate}</Moment> in {props.birthPlace}
      </div>
    </div>
  );
};

export default Profile;
