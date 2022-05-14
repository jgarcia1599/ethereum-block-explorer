import './App.css';
import BlockInfo from './components/BlockInfo';
import { getLatestBlockNumber } from './utils';

getLatestBlockNumber().then(blockNumber=>console.log(blockNumber))
function App() {
  return (
    <div className="App">
      <BlockInfo/>
    </div>
  );
}

export default App;
