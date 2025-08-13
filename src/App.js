import logo from './logo.svg';
import './App.css';
import As1UsingFunctional from './Components/As1UsingFunctional'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import HelloMessage from './Components/HelloMessage';
import PropsUsingClass from './Components/PropsUsingClass';
import Constructor from './Components/Constructor';
import StateEx from './Components/StateEx';
import Service from './Components/Service';
import Assignment1 from './Components/Assignment1';
function App() {
  return (
    <div className="App">
    {/* //  
    //  <Welcome> </Welcome> 
    //  <Hello></Hello>
    //  <HelloMessage name="AKshay" age="20"/> */}

    {/* <PropsUsingClass name="Akshay"  age="25"/>
    <Constructor name="Akshay"/>

    <StateEx/>
    <Service /> */}


  <Assignment1 />
 <As1UsingFunctional />

    </div>
  );
}

export default App;
