import express from 'express';
import { tokenRouter } from 'routes';
import configService from './services/config.service';

const app = express();

app.use(express.json());

app.use(tokenRouter); // mainRouter

app.listen(Number(configService.get('PORT')), configService.get('HOST'), () => {
  console.log(`Server is running on port ${configService.get('PORT')}`);
});
