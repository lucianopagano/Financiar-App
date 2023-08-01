import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonList, IonRow } from '@ionic/react';
import './EdicionImpuestoContainer.css';
import { useState } from 'react';



interface ContainerProps {
  name: string;
}

const EdicionImpuestoContainer: React.FC<ContainerProps> = ({ name }) => {

  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };


  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <IonList>

      <IonGrid>
        <IonRow>
          <IonCol>
            <IonInput label="Nombre Servicio" labelPlacement="floating" fill="outline" placeholder="Ingrese nombre de servicio"></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput label="Titular Servicio" labelPlacement="floating" fill="outline" placeholder="Ingrese nombre y apellido de titular"></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol></IonCol>
          <IonCol><IonButton>Alta</IonButton></IonCol>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>

    </IonList>
  );
};

export default EdicionImpuestoContainer;