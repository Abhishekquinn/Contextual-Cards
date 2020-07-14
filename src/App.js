import React from 'react';
 import HomePage from './Components/HomePage/HomePage';
 import Reward from './Components/SpinRewards/SpinRewards';
import {BrowserRouter,Route} from 'react-router-dom';


class App extends React.Component {

  

  render(){
    return (
      <BrowserRouter>
        <div className="App" onContextMenu={(e)=> e.preventDefault()} >
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/rewards' component={Reward}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
