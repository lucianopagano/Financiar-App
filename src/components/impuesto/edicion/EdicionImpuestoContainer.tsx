import { IonItem, IonLabel } from '@ionic/react';
import './EdicionImpuestoContainer.css';

interface ContainerProps {
  name: string;
}

const EdicionImpuestoContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonItem>
        <IonLabel>Con ustedes señoras y señores EL GRAN PUCHO</IonLabel>
    </IonItem>
  );
};

export default EdicionImpuestoContainer;