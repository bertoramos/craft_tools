
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

type MyProps = { };
type MyState = { };

class Foo extends React.Component<MyProps, MyState> {
    render() {
        return (
            <>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/main">Home</IonButton>
                    </IonButtons>
                    <IonTitle>Template</IonTitle>
                </IonToolbar>
                <IonContent fullscreen={true} className="ion-padding">
                    {
                        Array(100).fill("Template").map((str) => {
                            return <div>{str}</div>
                        })
                    }
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                    <IonTitle>Footer</IonTitle>
                    </IonToolbar>
                </IonFooter>
            </>
        );
    }
}

export default Foo;
