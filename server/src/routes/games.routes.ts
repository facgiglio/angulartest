import { Router } from 'express';
import gameController from '../controllers/games.controller';

class GamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gameController.list);
        this.router.get('/:id', gameController.get);
        this.router.post('/', gameController.create);
        this.router.put('/:id', gameController.update);
        this.router.delete('/:id', gameController.delete);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;