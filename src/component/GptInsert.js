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

        try {
            const response = await fetch('./api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: value }),
            });

            const data = await response.json();
            if (response.status !== 200) {
                throw (
                    data.error ||
                    new Error(`request failed with status ${response.status}`)
                );
            }

            // setAnswer(data.result);
            // setQuestion('');

            onInsert(value);
            setValue("");
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