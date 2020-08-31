import React, { memo } from "react";

const ModalPopup = memo(({ title, description, dispatch }: any) => {
  const onCancel = () => {
    dispatch({
      type: "CANCEL_MODAL_POPUP",
    });
  };

  const onOk = () => {
    dispatch({
      type: "OK_MODAL_POPUP",
    });
  };
  return (
    <div id="modal-popup-wrapper">
      <div className="modal-popup">
        <div className="title-wrapper">
          <p className="title">{title}</p>
        </div>
        <div className="description-wrapper">
          <p className="sub">{description}</p>
        </div>
        <div className="button-wrapper">
          <input type="button" value="예" onClick={onOk} />
          <input type="button" value="아니오" onClick={onCancel} />
        </div>
      </div>
    </div>
  );
});

export default ModalPopup;
