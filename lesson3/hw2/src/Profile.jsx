import React from 'react';
import moment from 'moment';

const Profile = props => {
  const dataBirth = moment(props.birthDate).format('DD MMM YY');
  return (
    <div>
      <div className="profile__name">
        {props.firstName} {props.lastName}
      </div>
      <div className="profile__birth">
        Was born {dataBirth} in {props.birthPlace}
      </div>
    </div>
  );
};

export default Profile;
