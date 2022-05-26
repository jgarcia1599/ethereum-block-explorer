import { useParams } from "react-router-dom";
import { getBlockWithTransactions } from "../utils";
import { useEffect, useState } from "react";
const {utils, BigNumber} = require('ethers');

function BlockInfoDisplay() {
  let { blockNumber } = useParams();
  let [blockData, setBlockData] = useState(null);
  useEffect(() => {
      getBlockWithTransactions(parseInt(blockNumber)).then((data) => {
        setBlockData(data);
      })
  }, []);
  console.log(blockData);
  if (!blockData)
    return (
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Block {blockNumber}</h5>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Block {blockNumber}</h5>
            <p className="card-text">
              {" "}
              <b>Hash: </b>
              {blockData.hash}
            </p>
            <p className="card-text">
              <b>Parent hash: </b>
              {blockData.parentHash}
            </p>
            <p className="card-text">
              <b>Miner: </b>
              {blockData.miner}
            </p>
            <p className="card-text">
              <b>Nonce: </b>
              {blockData.nonce}
            </p>
            <p className="card-text">
              <b>Timestamp: </b>
              {blockData.timestamp}
            </p>
            <p className="card-text">
              <b>Number of transactions: </b>
              {blockData.transactions.length}
            </p>
            <p className="card-text">
              <b>Gas Limit: </b>
              {utils.formatEther(blockData.gasLimit)} ether
            </p>
            <p className="card-text">
              <b>Gas Used: </b>
              {utils.formatEther(blockData.gasUsed)} ether
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockInfoDisplay;
