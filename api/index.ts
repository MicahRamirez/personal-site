import express from 'express';
const PORT = '3003';
const app = express();

app.listen(PORT, () => {
    console.log('server listening');
})