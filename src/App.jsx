
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  
  const counterInfo = useSelector((state) => state.counter);

  return (
    <div className="App">
      {counterInfo}
    </div>
  );
}

export default App