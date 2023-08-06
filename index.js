const app = require('./src/main');
const { APP_PORT, APP_NAME } = require('./src/helper/env');
const PORT = APP_PORT || 5959;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`${APP_NAME} RUN at port ${PORT}`);
});
