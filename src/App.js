import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { Route, HashRouter as Router } from 'react-router-dom';
import Landing from './components/Home/Landing';
import Movie from './components/Home/Movie';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/movie/:id" component={Movie}/>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
