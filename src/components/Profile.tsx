import React, { memo } from "react";

const Profile = memo(({ name, dispatch, select }: any) => {
  const onClick = (e: any) => {
    if (!select) {
      dispatch({
        type: "SET_INIT_DOTS_COUNT",
        initDotsCount: [],
      });
    }
    dispatch({ type: "SET_NAME", name });
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
