import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar_profile" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <div className="data_profile">
          <div>
            <li className="data_profile_container">
              <div>
                <span className="label_profile">Followers</span>
              </div>
              <div>
                <span className="quantity">{stats.followers}</span>
              </div>
            </li>
          </div>
          <div>
            <li className="data_profile_container">
              <div>
                <span className="label_profile">Views</span>
              </div>
              <div>
                <span className="quantity">{stats.views}</span>
              </div>
            </li>
          </div>
          <div>
            <li className="data_profile_container">
              <div>
                <span className="label_profile">Likes</span>
              </div>
              <div>
                <span className="quantity">{stats.likes}</span>
              </div>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
