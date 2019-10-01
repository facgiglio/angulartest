import express, { Application } from 'express';
import indexRoutes from './routes/index.routes';
import gamesRoutes from './routes/games.routes';
import morgan from 'morgan';
import cors from 'cors';

//Type script class
class Server {
    //Properties
    public app: Application;

    //Constructor, this funciton execute when the class is created.
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //Configuration function
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
    }

    //Routes function
    routes(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(indexRoutes);
        this.app.use('/api/games', gamesRoutes);
        this.app.use(express.urlencoded({ extended: false }));
    }

    //Start Function
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server running on port: ${this.app.get('port')}`);
        });
    }
}

const server = new Server();
server.start();