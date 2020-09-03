import React, { memo, useRef, useState } from "react";
import Profile from "./Profile";
import groupData from "../data/group.json";

const ProfileWrapper = memo(
  ({ selectGroup, dispatch, name, selectedProfile }: any) => {
    const [group, setGroup] = useState(groupData as { [index: string]: any });
    return (
      <div id="profile-wrapper">
        <div id="profile-slide">
          {selectedProfile === "home"
            ? group.names.map((item: any) => (
                <Profile
                  group={item}
                  key={item}
                  type={"home"}
                  dispatch={dispatch}
                  select={item === name}
                ></Profile>
              ))
            : selectedProfile === "group"
            ? group[selectGroup].member.map((item: any) => (
                <Profile
                  group={selectGroup}
                  name={item}
                  key={item}
                  type={"group"}
                  dispatch={dispatch}
                  select={item === name}
                />
              ))
            : group[selectGroup].imgs[name].map((item: any) => (
                <Profile
                  name={name}
                  img={item}
                  group={selectGroup}
                  key={item}
                  type={"member"}
                  dispatch={dispatch}
                  select={item === name}
                />
              ))}
        </div>
      </div>
    );
  }
);

export default ProfileWrapper;
