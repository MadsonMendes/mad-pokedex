import { GH, HeroContainer, HeroText, HeroTextContainer } from 'styles/Hero';
import { Open_Sans } from '@next/font/google';
const opensans = Open_Sans({
	subsets: ['latin'],
});

export default function Hero() {
	return (
		<HeroContainer className={opensans.className}>
			<HeroTextContainer>
				<HeroText>{"Mad's Pokédex"}</HeroText>
				<p>{"Every programmer has, why can't I have one too?"}</p>
				<p>
					Made with React, Next and Styled Components. All data displayed is
					gathered from PokéAPI. Pokémon and Pokémon character names are
					trademarks of Nintendo.
				</p>

				<GH
					width="20px"
					height="20px"
					viewBox="0 0 512 512"
					onClick={() => {
						window.open('https://stackoverflow.com/');
					}}
				></GH>
			</HeroTextContainer>
		</HeroContainer>
	);
}
