const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
dotenv.config();

const { sequelize } = require('./models');

const productRoutes = require('./route/productroute');

const { setSocketIO } = require('./socket');

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// instance io
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
});

setSocketIO(io);

io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    credentials: true
}));

const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use(express.json());

app.use("/api", productRoutes);

const onlineUsers = new Map();

sequelize.sync({ alter: false })
    .then(async () => {
        console.log("Database synced");

        server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => {
        console.error("Failed to sync database:", error);
    });
