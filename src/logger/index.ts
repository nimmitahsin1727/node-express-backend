import logger from 'pino';
import dayjs from 'dayjs';

import { pid } from 'process';

const log = logger({
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true,
		},
	},
	base: {
		pid: false,
	},
	timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
