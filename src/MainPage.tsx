
import { IonApp, IonButton, IonContent, IonHeader, IonInput, IonSearchbar, IonTitle } from '@ionic/react';
import React from 'react';

import tools_lst from './tools/tools';

type MyProps = { };
type MyState = {
    inpage_tools: Array<string>;
};

class MainPage extends React.Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
    
        this.state = {
          inpage_tools: tools_lst.map((tool) => tool.title)
        }
    }

    async handleInput(event: any)
    {        
        let search_array: Array<string> = []
        tools_lst.forEach((tool) => {
            search_array.push(tool.title)
        });

        let query = '';
        const target = event.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();

        if(query === '') {
            this.setState({inpage_tools: search_array});
        } else {
            let search_res = search_array.filter((d) => d.toLowerCase().indexOf(query) > -1);
            this.setState({inpage_tools: search_res});
        }
    }

    render() {
        let search_result_render = [];
        if (this.state.inpage_tools.length > 0)
        {
            tools_lst.map((tool) => {
                if(this.state.inpage_tools.includes(tool.title)) {
                    search_result_render.push( 
                        <IonButton key={tool.title} routerLink={tool.url}>{tool.title}</IonButton>
                    );
                }
            })
        } else {
            search_result_render.push(
                <IonTitle key="empty">La búsqueda no obtuvo ningún resultado.</IonTitle>
            );
        }

        return (
            <>
                <IonHeader>
                    <IonSearchbar debounce={500} onIonInput={(ev) => this.handleInput(ev)}></IonSearchbar>
                </IonHeader>

                <IonContent>
                    {
                        search_result_render.map((elem) => elem)
                    }
                </IonContent>
            </>
        );
    }
}

export default MainPage;
