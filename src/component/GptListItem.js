import "./GptListItem.scss";

function GptListItem({
    list,
}) {
    const { id, text, role } = list;
    return (
        <div className="GptListItem-virtualized" >
            {
                role &&
                <div className="GptListItemHeader">
                {
                    role == "user" ?
                    <>You</>
                    :
                    <>OpenAI</>
                }
            </div>
            }
            
            <div className="GptListItem" dangerouslySetInnerHTML={{ __html: text }}>
               
            </div>
        </div>
    )
}

export default GptListItem;