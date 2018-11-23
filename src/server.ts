import app from "./app";
import { Logger } from "./logger";
const PORT = 7000;

app.listen(PORT, () => {
    Logger.info('Express server listening on port ' + PORT)
})