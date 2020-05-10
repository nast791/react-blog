import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/Disposable/Home/Home";
import Profile from "./components/Disposable/Profile/Profile";
import Editor from "./components/Disposable/Editor/Editor";
import Note from "./components/Disposable/Note/Note";
import Layout from "./components/Disposable/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/editor/:id" exact component={Editor}/>
        <Route path="/note/:id" exact component={Note}/>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;