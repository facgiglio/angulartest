import { Request, Response } from 'express';
import pool from '../database';

class gamesControler {
    public async list(req: Request, res: Response) {
        const games = await pool.query('SELECT * FROM game');

        res.json(games);
    }

    public async get(req: Request, res: Response) {
        const { id } = req.params
        const games = await pool.query('SELECT * FROM game WHERE id = ?', [id]);

        if (games.length > 0) {
            res.json(games[0]);
        }
        else {
            res.status(404).json({ message: 'Game not found' });
        }
    }

    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO game SET ?', [req.body]);

        res.json({ message: 'Game created' });
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE game SET ? WHERE id = ?', [req.body, id]);

        res.json({ message: 'Game updated' });
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params
        await pool.query('DELETE FROM game WHERE id = ?', [id]);

        res.json({ message: 'Game deleted' });
    }

    public(req: Request, res: Response) {
        res.send(`Deleting the Game id: ${req.params.id}`);
    }
}

export default new gamesControler();
