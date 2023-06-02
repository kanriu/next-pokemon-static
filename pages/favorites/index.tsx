import { Layout } from "@/components/layouts";
import { FavoritePokemons, NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useState } from "react";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>(
    (typeof window === "object" && localFavorites.pokemons()) || []
  );

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemonsIds={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
