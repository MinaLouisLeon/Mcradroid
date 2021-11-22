const initialState = {
  page: "home",
  activeWindow: "",
  oldActiveWindow : "",
  oldOldActiveWindow : '',
  currentZIndex: 0,
  appsData: {
    0: {
      appName: "About",
      index: 0,
      zIndex: 0,
      isOpen: false,
      display: "none",
      isFullscreen: false,
      layout: {
        x: 1,
        y: 2,
        w: 15,
        h: 15,
        i: "McradroidAbout",
      },
    },
    1: {
      appName: "Settings",
      index: 1,
      zIndex: 0,
      isOpen: false,
      display: "none",
      isFullscreen: false,
      layout: {
        x: 1,
        y: 2,
        w: 15,
        h: 15,
        i: "McradroidSettings",
      },
    },
    2: {
      appName: "Portainer",
      index: 2,
      zIndex: 0,
      isOpen: false,
      display: "none",
      isFullscreen: false,
      layout: {
        x: 1,
        y: 2,
        w: 15,
        h: 15,
        i: "McradroidPortainer",
      },
    },
  },
};

const mcradroidReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setPageUrl":
      return {
        ...state,
        page: action.payload,
      };
    case "openApp":
      return {
        ...state,
        activeWindow: action.appId,
        oldActiveWindow : state.activeWindow,
        oldOldActiveWindow : state.oldActiveWindow,
        currentZIndex: state.currentZIndex + 1,
        appsData : {
            ...state.appsData,
            [action.index] : {
                ...state.appsData[action.index],
                display : "block",
                zIndex : state.currentZIndex + 1,
                isOpen : true,
            }
        }
      };
    case "closeApp":
        return{
            ...state,
            activeWindow : state.oldActiveWindow,
            oldActiveWindow : state.oldOldActiveWindow,
            oldOldActiveWindow : '',
            appsData : {
                ...state.appsData,
                [action.index] : {
                    ...state.appsData[action.index],
                    display : "none",
                    zIndex : 0,
                    isOpen : false
                }
            }
        }
    case 'appGetFocus':
        return{
            ...state,
            oldOldActiveWindow : state.oldActiveWindow,
            oldActiveWindow : state.activeWindow,
            activeWindow : action.appId,
            currentZIndex : state.currentZIndex + 1,
            appsData : {
                ...state.appsData,
                [action.index] : {
                    ...state.appsData[action.index],
                    zIndex : state.currentZIndex +1 ,
                }
            }
        }
    case 'maxApp':
        return{
            ...state,
            appsData : {
                ...state.appsData,
                [action.index] : {
                    ...state.appsData[action.index],
                    layout : {
                        ...state.appsData[action.index].layout,
                        x : 0,
                        y : 0,
                        h : 29,
                        w : 24
                    }
                }
            }
        }
    default:
      return state;
  }
};

export default mcradroidReducer;
