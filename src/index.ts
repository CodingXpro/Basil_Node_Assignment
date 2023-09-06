import express from 'express';
import { userRoute } from './Routes/userRoute';
import { connectToDatabase } from './databaseConnection';



const HOST ='http://localhost';
const PORT = 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});
app.use('/', userRoute());

app.listen(PORT, async () => {
  await connectToDatabase();

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
