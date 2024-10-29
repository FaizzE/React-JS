import logo from './logo.svg';
import './App.css';
import Item from './components/Item'
import AiseHi from './components/AiseHi'

function App() {
  return (
    <div>
        <Item name="year" sem="5" sun="9"></Item>
        <AiseHi></AiseHi>
        <Item name="year" sem="5" sun="9"></Item>
        <AiseHi></AiseHi>
        <Item name="year" sem="5" sun="9"></Item>
        <AiseHi></AiseHi>
        <div className="App">Hello React, Now Beast in your House</div>
    </div>
  );
}

export default App;
