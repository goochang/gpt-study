import logo from './logo.svg';
import './App.css';
import GptTemplate from './component/GptTemplate';
import GptInsert from './component/GptInsert';
import GptList from './component/GptList';
import { useRef, useState } from 'react';

function App() {

  const [lists, setLists] = useState([
    {
      id: 1,
      text: '입력해주세요.',
    },
  ]);

  const nextId = useRef(2);

  const onInsert = function(text, role) {
    setLists((lists)=> [...lists, {id: nextId.current, text: text, role: role}]);
    nextId.current += 1;
  }

  return (
    <GptTemplate>
      <GptList lists={lists} />
      <GptInsert onInsert={onInsert} />
    </GptTemplate>
  );
}

export default App;
