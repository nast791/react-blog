import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/Home/Home";
import LK from "./components/LK/LK";
import Editor from "./components/Editor/Editor";
import Note from "./components/Note/Note";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/lk" exact component={LK}/>
      <Route path="/editor/:id" exact component={Editor}/>
      <Route path="/:id" exact component={Note}/>
      <Redirect to="/" />
    </Switch>
  );
};

export default App;