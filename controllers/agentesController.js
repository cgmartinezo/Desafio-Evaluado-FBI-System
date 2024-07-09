import dotenv from 'dotenv/config';
import { generateToken, verifyToken } from "../utils/jwtUtils.js";
import { results } from '../data/agentes.js';

const secretKey = process.env.SECRET_KEY


export const verifyUserToken = async (req, res) => {
    const { token } = req.query;
    try {
        const data = await verifyToken(token, secretKey)
        res.send(data)
    } catch (err) {
        res.send("Token invalido")
    }
}

export const signIn = (req, res) => {
    try {
        const { email, password } = req.query;

        const user = results.find((u) => u.email === email && u.password === password);

        if (user) {
            const token = generateToken(user, secretKey, "2m");
            res.send(`
            <a href="/Dashboard?token=${token}"> <p> Ir al Dashboard </p> </a>
            Bienvenido, ${email}.
            <script>
            localStorage.setItem('token', JSON.stringify("${token}"))
            </script>
            `);
        } else {
            res.send("Usuario o contraseña incorrecta");
        }
    } catch (error) {
        console.log(error)
    }
}





