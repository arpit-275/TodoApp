import app from './app';
import env from './utils/validateEnv';
import db from './config/db.config';

const port = env.PORT;

db.sync()
  .then(() => {
    console.log('Connected to DB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(console.error);
