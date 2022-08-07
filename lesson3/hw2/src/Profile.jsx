import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const Profile = props => {
  console.log('props:', props);
  return (
    <div>
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
        Was born <Moment format="DD MMM YY">{props.userData.birthDate}</Moment> in{' '}
        {props.userData.birthPlace}
      </div>
    </div>
  );
};

export default Profile;
