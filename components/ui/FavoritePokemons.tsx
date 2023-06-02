import { Grid } from "@nextui-org/react";
import React from "react";
import { FavoriteCardPokemon } from "../pokemon";

interface Props {
  pokemonsIds: number[];
}

export const FavoritePokemons = ({ pokemonsIds }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonsIds.map((id) => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
