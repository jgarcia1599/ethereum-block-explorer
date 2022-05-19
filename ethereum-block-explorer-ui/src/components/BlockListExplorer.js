import model from "../utils/model";
import "./BlockListItem.css";
import { useNavigate } from "react-router-dom";

function BlockListExplorer(props) {
  let blocksToDisplay = props.blocksToDisplay;
  let navigate = useNavigate();

  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <form className="block-list-manager">
          <div class="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ethereum Mainnet"
              aria-label="Network Name"
              disabled
            />
            <input
              type="number"
              className="form-control"
              min={0}
              placeholder={model.numBlock}
              aria-label="Last name"
              onChange={(e) => {
                if (!e.target.value) {
                  return;
                }
                model.numBlock = e.target.value;
              }}
            />
          </div>
        </form>
        <ul className="list-group">
          {blocksToDisplay ? (
            blocksToDisplay.map((block) => (
              <li
                className="list-group-item"
                onClick={() => navigate(`/block/${block.number}`)}
              >
                Block {block.number}
              </li>
            ))
          ) : (
            <p>Loading Ethereum Block Info...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default BlockListExplorer;
