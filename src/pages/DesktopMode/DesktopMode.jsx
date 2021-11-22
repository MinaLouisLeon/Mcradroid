import "./DesktopMode.css";
import { GiAndroidMask } from "react-icons/gi";
import { IconContext } from "react-icons";
import { IonPopover } from "@ionic/react";
import { useState } from "react";
import MainMenu from "../../components/MainMenu/MainMenu";
import DesktopModeLayout from "../../components/DesktopModeLayout/DesktopModeLayout";
const DesktopMode = () => {
  const [mainMenuState, setShowMainMenu] = useState({
    showMainMenu: false,
    event: undefined,
  });
  return (
    <>
      <IonPopover
        isOpen={mainMenuState.showMainMenu}
        event={mainMenuState.event}
        onDidDismiss={() =>
          setShowMainMenu({ showMainMenu: false, event: undefined })
        }
      >
        <MainMenu />
      </IonPopover>

      {/* //TODO create the desktop shortcut for apps */}
      <div className="desktop-mode-main-container">
        {/* //TODO create the deaktop layout */}
        <DesktopModeLayout/>
      </div>
      {/* //TODO add map to the list of minimized application on the task bar */}
      <div className="desktop-mode-taskbar-container">
        <div
          className="desktop-mode-start-btn"
          onClick={(e) => {
            e.persist();
            setShowMainMenu({ showMainMenu: true, event: e });
          }}
        >
          <IconContext.Provider value={{ color: "blueviolet", size: "1.5em" }}>
            <GiAndroidMask />
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default DesktopMode;
