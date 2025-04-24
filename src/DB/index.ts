class Database {
	private static instance: string | null = null;
	private constructor() {}

	public static getInstance() {
		if (!this.instance) {
			this.createInstance();
		}
		console.log(this.instance);
	}

	private static createInstance() {
		Database.instance = 'Postgres Database instance created';
		console.log('Database instance called');
	}
}

export default Database;
