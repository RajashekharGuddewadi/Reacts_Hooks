import React, { useState } from 'react';

function Stateuse() {
  const [startname, setname] = useState("Raj");

  const updatename = (event) => {
    const newname = event.target.value;
    setname(newname);
  };

  return (
    <div>
      <h1>{startname}</h1>
      <input type="text" value={startname} onChange={updatename} placeholder='enter name' />
    </div>
  );
}

export default Stateuse;
