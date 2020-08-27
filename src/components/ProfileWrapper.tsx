import React, { memo } from "react";
import Profile from "./Profile";

const ProfileWrapper = memo(({ member, setName, name }: any) => {
  return (
    <div id="profile-wrapper">
      {member.map((item: any) => {
        if (item === name) {
          return (
            <Profile
              name={item}
              key={item}
              setName={setName}
              select={true}
            ></Profile>
          );
        }
        return <Profile name={item} key={item} setName={setName}></Profile>;
      })}
    </div>
  );
});

export default ProfileWrapper;
