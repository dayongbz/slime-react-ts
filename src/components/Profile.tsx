import React, { memo } from "react";

const Profile = memo(({ name, setName, select }: any) => {
  const onClick = (e: any) => {
    setName(name);
  };
  return (
    <div
      onClick={onClick}
      className={select ? "profile selected" : "profile"}
      style={{ backgroundImage: `url(./img/${name}.jpg)` }}
    ></div>
  );
});

export default Profile;
