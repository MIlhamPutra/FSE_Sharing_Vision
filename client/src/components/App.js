import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import AllPosts from './allPosts'
import AddPosts from './AddPosts'
import EditPosts from './EditPosts'
import Preview from './Preview'
import Published from './Published'
import Draft from './Draft'
import Trash from './Trash'
import UpdateToTrash from './UpdateToTrash'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={AllPosts}/>
            <Route path="/add" component={AddPosts}/>
            <Route path="/edit/:id" component={EditPosts}/>
            <Route path="/preview" component={Preview}/>
            <Route path="/published" component={Published}/>
            <Route path="/draft" component={Draft}/>
            <Route path="/trash" component={Trash}/>
            <Route path="/updateToTrash/:id" component={UpdateToTrash}/>
        </BrowserRouter>
    )
}

export default App