const express = require('express');
const cors = require('cors');
const app = express();
const APP_CONFIG = require('./src/config/serviceConfig').CONFIGS
const PORT = APP_CONFIG.listeningPort;

const CONTROLLER = require('./src/service/appservice')

console.log(CONTROLLER)


// Middleware
app.use(cors());
app.use(express.json());



app.post('/api1/test',CONTROLLER.APP_CONTROLLER)
app.post(APP_CONFIG.urlmodel+'signup/post',CONTROLLER.APP_CONTROLLER)
app.post(APP_CONFIG.urlmodel+'signin/post',CONTROLLER.APP_CONTROLLER)




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});