// Main
import { FC } from 'react';
import Image from 'next/image';
import Flag from 'react-world-flags';
import { getCode } from 'country-list';
// Styles
import 'app/userlist/styles/index.scss';
// Components
import CustomIconProvider from 'providers/icon_provider';
// Types
import { userProps } from 'app/userlist/types';

const UserCard: FC<userProps> = ({
  id,
  name,
  phone,
  location,
  login,
  email,
  picture,
  gender,
  address,
}) => {
  return (
    <div className="user-card">
      <span className="user-card__id">{id}</span>
      <div className="user-card__wrapper">
        <div className="user-card__personal-info">
          <Image src={String(picture.medium)} alt="user profile" height={72} width={72} />
          <div className="user-card__identity">
            <h3>
              {name?.first} {name?.last}
            </h3>
            <span>
              {login?.username} / {gender}
            </span>
          </div>
        </div>
        <div className="user-card__social-info">
          <div className="user-card__social-info__phone">
            <CustomIconProvider icon="CallCalling" />
            <p>{phone}</p>
          </div>
          <div className="user-card__social-info__mailAdress">
            <CustomIconProvider icon="DirectboxReceive" />
            <a href="https://mail.google.com/">{email}</a>
          </div>
          <p>
            {location.country}, {address.state}, {address.city}, {address.street}
          </p>
        </div>
        <div className="user-card__country">
          <Flag
            code={getCode(location.country) || 'IR'}
            style={{ width: '33px', height: '33px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
