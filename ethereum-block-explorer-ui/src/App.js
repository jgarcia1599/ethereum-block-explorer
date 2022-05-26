import "./App.css";
import { getLatestBlockNumber , geBlock} from "./utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import model from "./utils/model";
import BlockListExplorer from "./components/BlockListExplorer";
import BlockInfoDisplay from "./components/BlockInfoDisplay";

function App() {
  let [blocksToDisplay, setBlocksToDisplay] = useState(null);

  let getLatestBlocks = async (numBlock) => {
    let latestBlockNumber = await getLatestBlockNumber();
    let blocks = [];
    for (let i = 0; i < numBlock; i++) {
      let blockNumber = latestBlockNumber - i;
      let blockObject = await geBlock(blockNumber);
      blocks.push(blockObject);
    }
    setBlocksToDisplay(blocks);
  };

  useEffect(() => {
    getLatestBlocks(model.numBlock);
  });

  return (
    <BrowserRouter>
    <div className="App">
      <div class="jumbotron text-center">
        <div class="container">
          <h1 class="display-4">Ethereum Block Explorer</h1>
          <p class="lead">
            A simple interface to explore blocks on the Ethereum Blockchain.
          </p>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<BlockListExplorer blocksToDisplay={blocksToDisplay} />}
        />
        <Route path="block/:blockNumber" element={<BlockInfoDisplay />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
