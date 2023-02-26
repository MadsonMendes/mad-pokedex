/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { VT323 } from '@next/font/google';
import { colors } from 'data/colors';
import Type from './Type';
import { Container, Img, PokemonID, PokemonName } from 'styles/Type';
const font = VT323({
	subsets: ['latin'],
	style: 'normal',
	weight: '400',
});

interface IPoke {
	name: string;
	id: number;
	types: string[];
	img: string;
}
interface Props {
	selectedPokemon: string;
}

export default function Card({ selectedPokemon }: Props) {
	const PokemonInformation = {
		name: '',
		id: 0,
		types: [''],
		img: '',
	};
	const [Pokemon, setPokemon] = useState<IPoke>(PokemonInformation);
	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
			.then((res) =>
				setPokemon({
					name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
					id: res.data.id,
					types: !res.data.types[1]
						? [res.data.types[0].type.name]
						: [res.data.types[0].type.name, res.data.types[1].type.name],
					img: res.data.sprites['front_default'],
				}),
			);
	}, []);

	return (
		<Container color={colors[Pokemon.types[0]]}>
			<PokemonName className={font.className} color={colors[Pokemon.types[0]]}>
				{Pokemon.name} <PokemonID>{`#${Pokemon.id}`}</PokemonID>
			</PokemonName>
			<Type types={Pokemon.types}></Type>
			<Img src={Pokemon.img} alt={Pokemon.name}></Img>
		</Container>
	);
}
