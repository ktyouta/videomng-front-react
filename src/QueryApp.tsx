import React from 'react';
import { Home } from './Home/Component/Home';
import { Main } from './Main/Component/Main';


function QueryApp() {

    console.log(`QueryApp render`);

    return (
        <React.Fragment>
            <Main />
        </React.Fragment>
    );
}

export default QueryApp;
