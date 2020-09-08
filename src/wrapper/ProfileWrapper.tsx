import React, { memo, useRef, useEffect } from "react";
import Profile from "../components/Profile";

const ProfileWrapper = memo(
  ({ selectedProfile, dispatch, profile, dataJson, selectedImg }: any) => {
    const profileWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // when click profile, rest profile wrapper scrollbar
      if (profileWrapperRef.current?.scrollTo) {
        profileWrapperRef.current?.scrollTo(0, 0);
      }
    }, [profile]);

    return (
      <div id="profile-wrapper" ref={profileWrapperRef}>
        <div id="profile-slide">
          {selectedProfile !== "home" && ( // If selectedProfile state is not home then profile-slide has prev button
            <Profile type="prev" dispatch={dispatch} depth={profile.length} />
          )}
          {selectedProfile === "home"
            ? dataJson.names.map((
                item: any // If selectedprofile state is home then Profile component show group icon
              ) => (
                <Profile
                  group={item}
                  key={item}
                  type={"home"}
                  dispatch={dispatch}
                  sub={item}
                ></Profile>
              ))
            : selectedProfile === "group"
            ? dataJson[profile[0]].member.map((
                item: any // If selectedprofile state is group then Profile component show member icon
              ) => (
                <Profile
                  group={profile[0]}
                  name={item}
                  key={item}
                  type={"group"}
                  dispatch={dispatch}
                  imgs={dataJson[profile[0]].imgs[item]}
                  sub={item}
                />
              ))
            : dataJson[profile[0]].imgs[profile[1]] // If selectedprofile state is member then Profile component show person img
                .map((item: any) => (
                  <Profile
                    name={profile[1]}
                    img={item}
                    group={profile[0]}
                    key={item}
                    type={"member"}
                    selected={
                      selectedImg[selectedImg.length - 1].name === profile[1] &&
                      selectedImg[selectedImg.length - 1].group ===
                        profile[0] &&
                      selectedImg[selectedImg.length - 1].img === item
                    }
                    dispatch={dispatch}
                  />
                ))}
        </div>
      </div>
    );
  }
);

export default ProfileWrapper;
