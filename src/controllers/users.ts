import { Request, Response } from 'express';
import mockedUsers from '../mock/mockedUsers';

let users = mockedUsers;

export const createUser = (req: Request, res: Response) => {
	const { name, email } = req.body;
	const newUser = {
		id: users.length + 1,
		name,
		email,
	};

	users.push(newUser);

	res.status(201).json({
		message: 'user created',
		user: newUser,
	});
};

export const getUsers = (req: Request, res: Response) => {
	const emailQuery = (req.query.email as string) || null;
	const filteredUsers = users.filter((user) => {
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
		count: filteredUsers.length,
		users: filteredUsers,
	});
};
