import app from "./app";
import { Logger } from "./logger";
const config = require('../settings/config.json');

const PORT = config['server-port'];

app.listen(PORT, () => {
    Logger.info(`Running server on port ` + PORT);
}).on('error', (err) => {
    Logger.error(err.message);
});

