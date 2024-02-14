import "./GptTemplate.scss";

function GptTemplate({children}) {
    return (
        <div className="GptTemplate">
            <div className="app-title">Chat GPT</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default GptTemplate;