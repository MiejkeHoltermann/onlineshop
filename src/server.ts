import express, { Request, Response } from 'express';
import cors from 'cors';
import { sample_Pokemon, sample_tags } from './data';

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.get('/api/pokemon', (req: Request, res: Response) => {
  res.send(sample_Pokemon);
});

app.get('/api/pokemon/search/:searchTerm', (req: Request, res: Response) => {
  const searchTerm = req.params['searchTerm'];
  const pokemon = sample_Pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(pokemon);
});

app.get('/api/pokemon/tags', (req: Request, res: Response) => {
  res.send(sample_tags);
});

app.get('/api/pokemon/tag/:tagName', (req: Request, res: Response) => {
  const tagName = req.params['tagName'];
  const pokemon = sample_Pokemon.filter((pokemon) =>
    pokemon.tags?.includes(tagName)
  );
  res.send(pokemon);
});
const port = 5000;
app.listen(port, () => {
  console.log('Website served on http://localhost:' + port);
});

app.get('/api/pokemon/:pokemonId', (req: Request, res: Response) => {
  const pokemonId = req.params['pokemonId'];
  const pokemon = sample_Pokemon.find((pokemon) => pokemon.id == pokemonId);
  res.send(pokemon);
});
