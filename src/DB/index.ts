import { Pool } from 'pg';

class Database {
	private static instance: Pool;
	private constructor() {}

	public static getInstance(): Pool {
		if (!this.instance) {
			this.createInstance();
		}

		return this.instance;
	}

	private static createInstance() {
		Database.instance = new Pool({
			host: 'localhost',
			port: 5432,
			user: 'postgres',
			password: 'root',
			database: 'postgres',
		});
		console.log('PostgreSQL: Pool created successfully.');

		Database.instance.on('error', (err: Error) => {
			console.error(err, 'PostgreSQL: Unexpected error on idle client');
			process.exit(-1);
		});
	}

	public static executeQuery = async <T>(query: string): Promise<T[]> => {
		const pool = Database.getInstance();
		const client = await pool.connect();

		try {
			const result = await client.query(query);
			return result.rows;
		} catch (err) {
			console.error(err, 'Error executing query');
			throw err;
		} finally {
			client.release();
		}
	};
}

export default Database;
