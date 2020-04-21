import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/Disposable/Home/Home";
import LK from "./components/Disposable/LK/LK";
import Editor from "./components/Disposable/Editor/Editor";
import Note from "./components/Disposable/Note/Note";
import Layout from "./components/Disposable/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/lk" exact component={LK}/>
        <Route path="/editor/:id" exact component={Editor}/>
        <Route path="/:id" exact component={Note}/>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;