function BlockInfo (props) {
    let block = props.block;
    return <li className="list-group-item">Block {block.number}</li>;
}

export default BlockInfo;