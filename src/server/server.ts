import express from 'express';
import renderHTML from '~/server/renderHtml';
import { API } from '~/config/constants';

const app = express();
const staticPath = __dirname + '/';

app.use(express.static(staticPath));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
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

app.get('/', (req, res) => {
  res.status(200).send(renderHTML());
});

app.listen(9591, () => {
  console.log('Server running on :9591');
});
