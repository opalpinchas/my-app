import './App.css';
import { MainPage } from './pages/main-page';
import { Switch, Route } from 'react-router-dom';
import { HouseList } from './pages/house-list';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/explore">
          <HouseList/>
        </Route>
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
