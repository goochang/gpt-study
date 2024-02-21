import "./GptInsert.scss";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

function GptInsert({
    onInsert
}) {
    const [value, setValue] = useState("");
    const onChange = function (e) {
        setValue(e.target.value);
    }

    const insert = async function () {
        onInsert(value, "user");
        setValue("");
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, // YOUR_API_KEY는 실제 API 키로 대체되어야 합니다.
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{"role": "user", "content": value}],
                    // max_tokens: 150,
                }),
            });

            const data = await response.json();
            console.log(data);
            const content = data.choices[0] && data.choices[0].message.content.replace(/\n/g, "<br />");

            onInsert(content, "ai");

        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }
    return (
        <div className="GptInsert" >
            <input
                onChange={onChange}
                value={value}
                placeholder="메세지를 입력하세요"
            />
            <button onClick={() => insert()}>
                <MdAdd />
            </button>
        </div>
    )
}

export default GptInsert;