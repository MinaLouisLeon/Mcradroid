import "./DesktopModeLayout.css";
import GridLayout from "react-grid-layout";
import { useSelector, useDispatch } from "react-redux";
import { TitleBar } from "react-desktop/macOs";
import { actionAppGetFocus, actionCloseApp, actionMaxApp } from "../../actions";
const DesktopModeLayout = () => {
  const dispatch = useDispatch(null);
  const appsData = useSelector((state) => state.mcradroidReducer.appsData);

  const handleCloseApp = (index) => {
    dispatch(actionCloseApp(index));
  };
  const handleAppGetFouse = (index, appId) => {
    dispatch(actionAppGetFocus(index, appId));
  };
  const handleMaxApp = (index) => {
    console.log("max");
    dispatch(actionMaxApp(index));
  };
  return (
    <GridLayout
      width={window.innerWidth}
      cols={24}
      rowHeight={10}
      vertivalCompact={false}
      draggableHandle=".class-for-handler-drag"
      allowOverlap={true}
      useCSSTransforms={true}
      onLayoutChange={(layout) => console.log(layout)}
    >
      {appsData &&
        Object.keys(appsData).map((key, index) => {
          return (
            <div
              key={appsData[key].layout.i}
              data-grid={appsData[key].layout}
              style={{
                zIndex: appsData[key].layout.zIndex,
                display: appsData[key].display,
              }}
            >
              {/* //TODO add controls fns to titlebar */}
              <TitleBar
                controls={true}
                title={appsData[key].appName}
                className="class-for-handler-drag"
                isFullscreen={appsData[key].isFullscreen}
                onCloseClick={() => handleCloseApp(key)}
                onMouseDown={() =>
                  handleAppGetFouse(key, appsData[key].layout.i)
                }
              ></TitleBar>
              <div className="desktop-mode-layout-app-content">
                {/* //TODO add apps content */}
              </div>
            </div>
          );
        })}
    </GridLayout>
  );
};

export default DesktopModeLayout;
