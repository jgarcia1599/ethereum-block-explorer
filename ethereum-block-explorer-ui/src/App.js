import "./App.css";
import BlockInfo from "./components/BlockInfo";
import BlockExplorerList from "./components/BlockExplorerList";
import { getLatestBlockNumber, getLatestBlockWithTransactions } from "./utils";
import { useEffect, useState } from "react";

function App() {
  let [numBlock, setBlockNum] = useState(10);
  let [blocksToDisplay, setBlocksToDisplay] = useState(null);

  let getLatestBlocks = async (numBlock) => {
    let latestBlockNumber = await getLatestBlockNumber();
    let blocks = [];
    for (let i = 0; i < numBlock; i++) {
      let blockNumber = latestBlockNumber - i;
      let blockObject = await getLatestBlockWithTransactions(blockNumber);
      blocks.push(blockObject);
    }
    setBlocksToDisplay(blocks);
  };

  useEffect(() => {
    getLatestBlocks(numBlock);
  }, [numBlock]);

  return (
    <div className="App">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">Ethereum Block Explorer</h1>
          <p class="lead">
            A simple Interface to explore blocks on the Ethereum Blockchain.
          </p>
        </div>
      </div>
      <BlockExplorerList>
        <form className="block-list-manager">
          <div class="row">
            <div class="col">
              <input
                type="text"
                className="form-control"
                placeholder="Ethereum Mainnet"
                aria-label="Network Name"
                disabled
              />
            </div>
            <div class="col">
              <input
                type="number"
                className="form-control"
                min={0}
                placeholder={numBlock}
                aria-label="Last name"
                onChange={(e) => {
                  if (!e.target.value) {
                    return;
                  }
                  setBlockNum(e.target.value);
                }}
              />
            </div>
          </div>
        </form>
        {blocksToDisplay ? (
          blocksToDisplay.map((block) => <BlockInfo block={block} />)
        ) : (
          <p>Loading Ethereum Block Info...</p>
        )}
      </BlockExplorerList>
    </div>
  );
}

export default App;
