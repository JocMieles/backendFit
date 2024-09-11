import  express, {Application, Request, Response}  from 'express';
import {json} from 'body-parser';

const app:Application=express();

app.use(json());

app.get('/api/test', (req: Request, res: Response) => {
    res.status(200).json({
      message: '¡El backend está funcionando correctamente!',
    });
  });

export default app;