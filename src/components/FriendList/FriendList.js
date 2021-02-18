import React from "react";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id} class="item">
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p class="name">{friend.name}</p>
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
    })
  ).isRequired,
};

export default FriendList;
