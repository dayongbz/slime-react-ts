import React, { memo } from "react";
import Profile from "./Profile";

const ProfileWrapper = memo(({ member, dispatch, name }: any) => {
  return (
    <div id="profile-wrapper">
      <div id="profile-slide">
        {member.map((item: any) => (
          <Profile
            name={item}
            key={item}
            dispatch={dispatch}
            select={item === name}
          ></Profile>
        ))}
      </div>
    </div>
  );
});

export default ProfileWrapper;
