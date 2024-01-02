import express from 'express';
import pg from 'pg';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'grade must be a positive integer');
    }
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
    `;

    const params = [gradeId];

    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      res.status(404).json({ error: 'id could not be found' });
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.use(express.json());

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'No name provided');
    }
    if (!course) {
      throw new ClientError(400, 'No course provided');
    }
    if (typeof score !== 'number') {
      throw new ClientError(400, `Score is not a number: ${score}`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score ${score} not between 0 and 100`);
    }

    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
    const params = [name, course, score];

    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api.grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'grade id must be positive integer');
    }
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'no name provided');
    }
    if (!course) {
      throw new ClientError(400, 'no course provided');
    }
    if (typeof score !== 'number') {
      throw new ClientError(400, `score is not a number: ${score}`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score ${score} not between 0 and 100`);
    }

    const sql = `
    update "grades"
    set "name" = $1,
      "course" = $2,
      "score" = $3
    where "gradeId" = $4
    returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'Grade ID must be a positive integer');
    }

    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    if (!grade) {
      throw new ClientError(404, 'grade not found');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
