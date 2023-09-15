import logo from './logo.svg';
import './App.css';

import Catagory from "./components/Catagory";

function App() {
      const c = {
        name: "Smart Phone",
        count: 3
      };
      return (
        <div className='container'>
          <Catagory cat={c} />
        </div>
      );
}

export default App;
