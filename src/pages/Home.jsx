import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useDispatch } from "react-redux";
import { actionSetPageUrl } from "../actions";
const Home = () => {
    const dispatch = useDispatch(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mcradroid</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="tc">
          <IonCard className="w5 h5 br4 center ma2 pa2">
            <IonCardContent>
              <div>
                <br />
                <br />
                <p>
                  Mcradroid GUI give android device the power of desktop to
                  display docker apps
                </p>
                <br></br>
              </div>
              <IonButton onClick={() => dispatch(actionSetPageUrl('desktop'))}>Start Desktop Mode</IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
