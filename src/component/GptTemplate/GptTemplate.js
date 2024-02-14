import "./GptTemplate.scss";

function GptTemplate({children}) {
    return (
        <div className="GptTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default GptTemplate;