const express = require('express');
const bodyParser = require('body-parser');
const OpenAIApi = require('openai');

const app = express();
const port = 3001; // 포트번호 설정

const dotenv = require('dotenv');

// .env 파일 로드
dotenv.config();

console.log(process.env);
console.log(process.env.OPENAI_API_KEY);
console.log(process.env.REACT_APP_OPENAI_API_KEY);

app.use(bodyParser.json());
// OpenAI 설정
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST 요청 처리
app.post('/api/generate', async (req, res) => {
  try {
    const { question } = req.body;
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `I am a highly intelligent question answering bot. If you ask me ${question} that is rooted in truth, I will give you the answer to Korean. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"잘 모르겠습니다.\".\n `,
      temperature: 0,
      max_tokens: 100,
    });
    res.json({ result: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});