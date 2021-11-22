import { IonItem, IonList ,IonLabel} from '@ionic/react';
import { useDispatch ,useSelector} from 'react-redux';
import { actionOpenApp, actionSetPageUrl } from '../../actions';
const MainMenu = () => {
    const dispatch = useDispatch(null);
    const appsData = useSelector(state => state.mcradroidReducer.appsData);
    const handleOpenApp = (index,appId,isOpen) => {
        if(!isOpen){
            dispatch(actionOpenApp(appId,index));
        }
    }
    return(
       <IonList>
            {appsData && Object.keys(appsData).map((key,index) => {
                return(
                    <IonItem button onClick={() => handleOpenApp(key,appsData[key].layout.i,appsData[key].isOpen)}>
                        <IonLabel>
                            {appsData[key].appName}
                        </IonLabel>
                    </IonItem>
                )
            })}
           <IonItem button lines='none' onClick={() => dispatch(actionSetPageUrl('home'))}>
               <IonLabel>
                    Exit Desktop mode
               </IonLabel>
           </IonItem>
       </IonList>
    )
}

export default MainMenu;