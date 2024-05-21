import { useEffect, useState } from 'react';

import './App.css';

function App() {
  
  let [Counter,setCounter]=useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      if (Counter < 20) {
        setCounter((Counter) => Counter + 1);
      }
    },1000);
  }, [Counter]);
  // const addvalue = ()=>{
  //   if (Counter < 20){
  //      setCounter(Counter+1);
  //   }
  // }
  // const removeValue = () => {
  //   if (Counter > 0) {
  //     setCounter(Counter - 1); 
  //   }
  // };
  return (
    <div className="App">
      <h1>Counter using hooks</h1>

      <h2>Counter : {Counter}</h2>
      <br />
       {/* 
       <div >
      <h1>hello world</h1>
      <button style={{ margin: '10px' }} onClick={addvalue}>Add Value</button>
      <button style={{ margin: '10px' }} onClick={removeValue}>Remove Value</button>
  </div> 
*/}
      
    </div>
    
  );
}


export default App;
