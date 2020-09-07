const reducer = (state: any, action: any) => {
  // set reducer
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: [...state.profile, action.status] };
    case "PREV_PROFILE":
      return { ...state, profile: [...state.profile.slice(0, -1)] };
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_GROUP":
      return { ...state, group: action.group };
    case "SET_IMG":
      return { ...state, img: action.img };
    case "SET_IMG_CTX_ARR":
      return {
        ...state,
        imgCtx: { ctx: action.ctx, img: action.img },
        imgCtxARR: {
          ...state.imgCtx,
          [action.name]: { ctx: action.ctx, img: action.img },
        },
      };
    case "SET_SCREEN_SIZE":
      return { ...state, screenSize: [...action.size] };
    case "SET_DOT_WRAPPER_SIZE":
      return { ...state, dotWrapperSize: [...action.size] };
    case "SET_INIT_DOTS_COUNT":
      return { ...state, initDotsCount: [...action.initDotsCount] };
    case "SET_MODAL_POPUP":
      return {
        ...state,
        modalPopup: [...state.modalPopup, { ...action.modalPopup }],
      };
    case "CANCEL_MODAL_POPUP":
      return {
        ...state,
        modalPopup: [...state.modalPopup.slice(1)],
      };
    case "OK_MODAL_POPUP":
      for (let i = 0; i < state.modalPopup[0].functions.length; i++) {
        state.modalPopup[0].functions[i](state.modalPopup[0].args[i]);
      }
      return {
        ...state,
        modalPopup: [...state.modalPopup.slice(1)],
      };
    case "ADD_SELECTED_IMG":
      return {
        ...state,
        selectedImg: [
          ...state.selectedImg,
          { name: action.name, group: action.group, img: action.img },
        ],
      };
    case "SET_MAX_DEPTH":
      return {
        ...state,
        maxDepth: action.depth,
      };
    case "SET_SELECTED_PROFILE":
      return {
        ...state,
        selectedProfile: action.select,
      };
    default:
      return state;
  }
};

export default reducer;
