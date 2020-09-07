import groupData from "../data/group.json";

const initialState = {
  // set initial state
  name: "group",
  dataJson: groupData as { [index: string]: any },
  group: "izone",
  img: "0.jpg",
  selectedProfile: "home",
  profile: [],
  selectedImg: [{ group: "izone", name: "group", img: "0.jpg" }],
  imgCtx: null,
  imgCtxArr: [],
  screenSize: [],
  dotWrapperSize: [],
  initDotsCount: [],
  modalPopup: [],
  maxDepth: 6,
};

export default initialState;
