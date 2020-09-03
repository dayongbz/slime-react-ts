import React, { memo, useState } from "react";

const Profile = memo(({ name, dispatch, type, group, img }: any) => {
  const [selected, setSelected] = useState(false);
  const onClick = (e: any) => {
    if (type === "home") {
      dispatch({ type: "SET_SELECTED_PROFILE", select: "group" });
      dispatch({ type: "SET_PROFILE", status: group });
    }
    if (type === "group") {
      dispatch({ type: "SET_SELECTED_PROFILE", select: "member" });
      dispatch({ type: "SET_PROFILE", status: name });
    }
    if (type === "member" && !selected) {
      dispatch({
        type: "ADD_SELECTED_IMG",
        name,
        group,
        img,
      });
      dispatch({
        type: "SET_MODAL_POPUP",
        modalPopup: {
          title: "경고",
          description: "지금까지 작업한 내용들이 초기화됩니다.",
          functions: [dispatch, dispatch, dispatch, dispatch],
          args: [
            {
              type: "SET_INIT_DOTS_COUNT",
              initDotsCount: [],
            },
            { type: "SET_GROUP", group },
            { type: "SET_NAME", name },
            {
              type: "SET_IMG",
              img,
            },
          ],
        },
      });
      setSelected(true);
    }
  };
  return (
    <>
      <div
        onClick={onClick}
        className={"profile"}
        style={
          type === "home"
            ? { backgroundImage: `url(./img/${group}/group/0.jpg)` }
            : type === "group"
            ? { backgroundImage: `url(./img/${group}/${name}/0.jpg)` }
            : { backgroundImage: `url(./img/${group}/${name}/${img})` }
        }
      ></div>
    </>
  );
});

export default Profile;
