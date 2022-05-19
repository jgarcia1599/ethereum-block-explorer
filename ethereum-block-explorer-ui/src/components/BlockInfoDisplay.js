import { useParams } from "react-router-dom";

function BlockInfoDisplay() {
  let { blockNumber } = useParams();
  return <h1>display info for a block {blockNumber}</h1>;
}

export default BlockInfoDisplay;
