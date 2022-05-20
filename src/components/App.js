import React from "react";
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import Header from "./Header";

//178847721818-t0nd20mmegvotbhk9ss48npr116ijhkm.apps.googleusercontent.com

import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return ( 
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />

                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;