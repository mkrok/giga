import express from 'express';
import renderHTML from '~/server/renderHtml';
import { API, ERRORS, SIZE } from '~/config/constants';
import texts from './texts';

const app = express();
const staticPath = __dirname + '/';
const cursors = Array.from(Array(SIZE).fill(0));

app.use(express.static(staticPath));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Max-Age', 600);
  next();
});

app.get('/data', (req, res) => {
  const dataStream = req.header('Data-Stream');
  fetch(`${API}${dataStream}`)
    .then(response => response.json())
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => console.error(err));
});

app.get('/letters/*', (req, res) => {
  const dataStream = req.path.split('/').pop();
  const letter = {
    letter: texts[dataStream][cursors[dataStream]],
    letter_index: cursors[dataStream],
  };
  if (Math.floor(Math.random() * ERRORS) === 0) {
    cursors[dataStream] += 2;
  } else {
    cursors[dataStream]++;
  }
  if (cursors[dataStream] === texts[dataStream].length) {
    cursors[dataStream] = 0;
  }
  res.status(200).send(letter);
});

app.get('/', (req, res) => {
  res.status(200).send(renderHTML());
});

app.listen(9591, () => {
  console.log('Server running on :9591');
});
