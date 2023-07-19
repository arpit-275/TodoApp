import { cleanEnv } from 'envalid';
import { port, str } from 'envalid/dist/validators';

export default cleanEnv(process.env, {
  NODE_ENV: str(),
  PORT: port(),
  DB_USER: str(),
  DB_NAME: str(),
  DB_PASSWORD: str(),
});
