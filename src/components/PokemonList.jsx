import { useEffect, useState } from 'react';
import { Grid } from '@mui/material'
import PokemonCard from './PokemonCard'
import { fetchPokemons } from '../services/pokemonService';

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons()
        .then((data) => setPokemons(data))
        .catch((error) => {
            console.error('Error obteniendo los pokemons:', error);
            alert("Error obteniendo los pokemons, intenta más tarde.");
        });
    }, []);

    return (
        <Grid container spacing={2}>
            {pokemons.map(
                (pokemon) => (
                    <Grid key={pokemon.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <PokemonCard pokemon={pokemon} />
                    </Grid>
                ))}
        </Grid>
    );
}