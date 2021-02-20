import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  // const statusIsOnline = friend.isOnline ? styles.active : styles.status;
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span className={friend.isOnline ? styles.active : styles.status}>
            {friend.isOnline}
          </span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
