import { IonApp } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//react-grid-layout styles
import "react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import { useSelector } from 'react-redux';

//pages
import Home from './pages/Home';
import DesktopMode from './pages/DesktopMode/DesktopMode';
const App = () => {
  const page = useSelector(state => state.mcradroidReducer.page);
  const handleNav = () => {
    switch (page) {
      case "home" :
        return(<Home/>)
      case 'desktop' :
        return(<DesktopMode/>)
      default :
        return(<Home/>)
    }
  }

  return(
    <IonApp>
      {handleNav()}
    </IonApp>
  )
}

export default App;
