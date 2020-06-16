import React from 'react';
import { Admin, Resource } from 'react-admin';
import './App.css';
import { PostList, PostEdit, PostCreate} from './posts';
import restProvider from 'ra-data-simple-rest';

function App() {
  return (
    <div className="App">
          <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
      </Admin>,
    </div>
  );
}

export default App;
