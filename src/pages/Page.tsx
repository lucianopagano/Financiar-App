import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { Route, useParams } from 'react-router';
//import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import EdicionImpuestoContainer from '../components/impuesto/edicion/EdicionImpuestoContainer';
import ExploreContainer from '../components/ExploreContainer';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRouterOutlet>
          <Route exact path="/folder/Alta-Impuesto" component={EdicionImpuestoContainer}></Route>
          <Route exact path="/folder/Inbox" component={ExploreContainer}></Route>
        </IonRouterOutlet>

      </IonContent>



    </IonPage>
  );
};

export default Page;
