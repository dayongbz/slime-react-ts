import React, { memo } from "react";

const Profile = memo(({ name, setName }: any) => {
  const onClick = () => {
    setName(name);
  };
  return (
    <div
      onClick={onClick}
      className="profile"
      style={{ backgroundImage: `url(./img/${name}.jpg)` }}
    ></div>
  );
});

export default Profile;
