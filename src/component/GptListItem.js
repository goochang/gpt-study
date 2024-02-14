import "./GptListItem.scss";

function GptListItem({
    list,
}) {
    const { id, text } = list;
    return (
        <div className="GptListItem-virtualized" >
            <li className="GptListItem">
               { text }
            </li>
        </div>
    )
}

export default GptListItem;