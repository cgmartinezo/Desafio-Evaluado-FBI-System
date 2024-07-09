import express from 'express';
import agentesRoutes from './routes/agentesRoutes.js';

const __dirname = import.meta.dirname + '/public';

const app = express();

app.use(express.static(__dirname))

app.use("/", agentesRoutes);

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto : ${PORT}`)
})