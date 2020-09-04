import React, { memo, useEffect, useState } from "react";

const Profile = memo(
  ({ name, dispatch, type, group, img, sub, depth, selected, imgs }: any) => {
    const [loaded, setLoaded] = useState(false);

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
      }
    };

    const onClickPrev = () => {
      dispatch({ type: "PREV_PROFILE" });
      switch (depth) {
        case 3:
          dispatch({ type: "SET_SELECTED_PROFILE", select: "group" });
          break;
        case 2:
          dispatch({ type: "SET_SELECTED_PROFILE", select: "group" });
          break;
        case 1:
          dispatch({ type: "SET_SELECTED_PROFILE", select: "home" });
          break;
        default:
          dispatch({ type: "SET_SELECTED_PROFILE", select: "home" });
          break;
      }
    };

    useEffect(() => {
      const imgLoad = new Image();
      imgLoad.onload = function () {
        setLoaded(true);
      };
      imgLoad.src =
        type === "home"
          ? `./img/${group}/group/0.jpg`
          : type === "group"
          ? `./img/${group}/${name}/0.jpg`
          : `./img/${group}/${name}/${img}`;
      console.log(imgLoad.src);
    }, [type, group, name, img]);

    return (
      <>
        {type === "prev" ? (
          <div className="prev" onClick={onClickPrev}>
            <img
              src="./img/keyboard_arrow_left-white-18dp.svg"
              alt="이전으로"
            />
          </div>
        ) : loaded ? (
          <div
            onClick={onClick}
            className={type === "home" ? "profile group" : "profile"}
          >
            <div
              className="background"
              style={
                type === "home"
                  ? { backgroundImage: `url(./img/${group}/group/0.jpg)` }
                  : type === "group"
                  ? { backgroundImage: `url(./img/${group}/${name}/0.jpg)` }
                  : { backgroundImage: `url(./img/${group}/${name}/${img})` }
              }
            ></div>
            <p className="sub">{sub}</p>
          </div>
        ) : (
          <div className="profile loading">
            <img src="./img/loop-white-18dp.svg" alt="loading" />
          </div>
        )}
      </>
    );
  }
);

export default Profile;
