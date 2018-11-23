import app from "./app";
import { Logger } from "./logger";
const PORT = 7000;

app.listen(PORT, () => {
    Logger.info(`Running server on port ` + PORT);
}).on('error', (err) => {
    Logger.error(err.message);
});

