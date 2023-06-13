const express = require('require');
const app = express();

app.get('/', (req, res) => {
	res.send('Bienvenue sur mon API !');
});

app.get('/users/:id', (req, res) => {
	const userId  = req.params.id;
	res.send('Informations sur l'utilisateur ${User.Id}');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Le serveur écoute sur le port ${port)'};
});