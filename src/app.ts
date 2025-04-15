import express, { json } from 'express';
import config from 'config';
import log from './logger';
import mockedUsers from './mock/mockedUsers';
import morgan from 'morgan';

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

app.get('/users', (req, res) => {
	const emailQuery = (req.query.email as string) || null;
	const filteredUsers = mockedUsers.filter((user) => {
		if (emailQuery) {
			// Check if the email contains the query string (case insensitive)
			const email = user.email.toLowerCase();
			const query = emailQuery.toLowerCase();
			return email.includes(query);
		} else {
			// If no email query, return all users
			return true;
		}
	});
	res.status(200).json({
		data: filteredUsers,
		count: filteredUsers.length,
	});
});

app.use((req, res) => {
	res.status(404).json({
		message: 'API not found',
	});
});

app.listen(port, host, () => {
	log.info(`Server is running at http://${host}:${port}`);
});
