import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ValueChange from './incrementaldecremental';

function App() {
  const[count,setCount] = useState<number>(0)
  return (
    <div>
          <ValueChange

            count={count}
            setCount={setCount}
            />
  
    </div>
  );
}

export default App;
