import { useState } from 'react';
import TikcetHome from './TicketHome';

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <TikcetHome/>
  );
}

export default App;