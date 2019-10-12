const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 9090;
const url = 'https://ogworldbackend.herokuapp.com/';

app.use(cors({
    origin: url
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => res.send('working'));

app.post('/', (req, res) => {
  console.log(req.hostname);
  console.log(req.body);
});

app.listen(PORT, a => console.log('app running on http://localhost:', PORT));
