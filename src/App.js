import './App.scss';
import Header from "./components/Header";
import {useState} from "react";
import AppScreen from "./components/AppScreen";


function App() {
  const [searchBy, setSearchBy] = useState('')
  return (
    <div className="App">
      <Header heading="React Exercise" updateSearchValue={(value) => setSearchBy(value)}/>
      <AppScreen searchBy={searchBy}/>
    </div>
  );
}

export default App;
