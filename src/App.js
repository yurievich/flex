import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import SomeInfo from './components/someInfo';
import Quote from './components/quote';
import Footer from './components/footer';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      < Header />
      < SomeInfo />
      < Quote />
      < SignUp />
      < Footer />
    </div>
  );
}

export default App;
