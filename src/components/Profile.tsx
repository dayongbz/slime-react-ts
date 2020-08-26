import React, { memo } from "react";

const Profile = memo((props: any) => {
  return (
    <div
      className="profile"
      style={{ backgroundImage: `url(./img/${props.name}.jpg)` }}
    ></div>
  );
});

export default Profile;
