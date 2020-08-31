import React, { memo } from "react";

const Profile = memo(({ name, dispatch, select }: any) => {
  const onClick = (e: any) => {
    if (!select) {
      dispatch({
        type: "SET_MODAL_POPUP",
        modalPopup: {
          title: "경고",
          description: "지금까지 작업한 내용들이 초기화됩니다.",
          function: dispatch,
          args: {
            type: "SET_INIT_DOTS_COUNT",
            initDotsCount: [],
          },
        },
      });
      // dispatch({
      //   type: "SET_INIT_DOTS_COUNT",
      //   initDotsCount: [],
      // });
    }
    dispatch({ type: "SET_NAME", name });
  };
  return (
    <>
      <div
        onClick={onClick}
        className={select ? "profile selected" : "profile"}
        style={{ backgroundImage: `url(./img/${name}.jpg)` }}
      ></div>
    </>
  );
});

export default Profile;
