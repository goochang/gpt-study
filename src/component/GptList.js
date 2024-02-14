import GptListItem from "./GptListItem";
import "./GptList.scss";

function GptList({
    lists
}) {

    return (
        <div className="GptList">
            {lists && lists.map((list, index) => (
                <GptListItem
                    list={list}
                />
            ))}
        </div>
    )
}

export default GptList;