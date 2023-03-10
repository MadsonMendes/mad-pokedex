import Head from 'next/head';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Card from 'components/Card';
import { GridContainer, Loader, LoadingContainer } from 'styles/Home';
import Hero from 'components/Hero';

export async function getStaticProps() {
	const res = await axios.get(
		'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
	);
	const data = res.data.results;
	return {
		props: {
			data,
		},
	};
}
export default function Home({ data }: any) {
	const loaderRef = useRef(null);

	const [Pokemon, setPokemon] = useState<any[]>([]);
	const [Page, setPage] = useState(20);
	useEffect(() => {
		data.map((item: any) =>
			setPokemon((currentList) => [...currentList, item.name]),
		);
	}, []);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '20px',
			threshold: 1.0,
		};

		const observer = new IntersectionObserver(async (entities) => {
			const target = entities[0];

			if (target.isIntersecting) {
				setPage((page) => page + 20);
			}
		}, options);

		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}
	}, []);

	useEffect(() => {
		const handleResquest = async () => {
			const res = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/?offset=${Page}&limit=20`,
			);
			await res.data.results.map((i: any) => {
				setPokemon((currentList) => [...currentList, i.name]);
			});
		};
		handleResquest();
	}, [Page]);

	return (
		<main>
			<Head>
				<title>Pokédex</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<style jsx global>{`
				body {
					margin: 0px;
					padding: 0px;
				}
			`}</style>
			<Hero></Hero>
			<GridContainer>
				{Pokemon.map((item: any, index: number) => {
					return <Card key={index} selectedPokemon={item}></Card>;
				})}
				<LoadingContainer>
					<p ref={loaderRef}>Carregando mais Pokémon</p>
					<Loader></Loader>
				</LoadingContainer>
			</GridContainer>
		</main>
	);
}

