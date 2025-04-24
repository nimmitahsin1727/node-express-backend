import express, { json } from 'express';
import config from 'config';
import log from './logger';
import morgan from 'morgan';
import { createUser, getUsers } from './controllers/users';
import Database from './DB';

const port = config.get<number>('port');
const host = config.get<string>('host');

const app = express();

app.use(json());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'prod' : 'dev'));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/test', (req, res) => {
	res.status(200).json({
		message: 'Hello from the test route!',
	});
});

app.post('/users', createUser);

app.get('/users', getUsers);

app.use((req, res) => {
	res.status(404).json({
		message: 'API not found',
	});
});

app.listen(port, host, () => {
	log.info(`Server is running at http://${host}:${port}`);

	Database.getInstance();
});
