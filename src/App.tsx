
import React from 'react';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { 
  IonApp, setupIonicReact,
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';

import tools_lst from './tools/tools';

import MainPage from './MainPage';

setupIonicReact();

type MyProps = { };
type MyState = { };

class App extends React.Component<MyProps, MyState> {

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <Redirect exact from="/" to="/main" />
          
          <Route path="/main" component={MainPage} />

          {
            tools_lst.map(
              (tool) => {
                return <Route key={tool.name} path={tool.url} component={tool.component}></Route>
              }
            )
          }
        
        </IonReactRouter>
      </IonApp>
    );
  }

}

export default App;
