interface Pokemon {
  number: string;
  name: string;
}

interface Props {
  pokedex: Pokemon[];
}

export function PokemonList({ pokedex }: Props) {
  console.log(pokedex);
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
