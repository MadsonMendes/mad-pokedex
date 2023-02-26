import Bug from '../../../../public/icons/bug.svg';
import Dark from '../../../../public/icons/dark.svg';
import Dragon from '../../../../public/icons/dragon.svg';
import Electric from '../../../../public/icons/electric.svg';
import Fairy from '../../../../public/icons/fairy.svg';
import Fighting from '../../../../public/icons/fighting.svg';
import Fire from '../../../../public/icons/fire.svg';
import Flying from '../../../../public/icons/flying.svg';
import Ghost from '../../../../public/icons/ghost.svg';
import Grass from '../../../../public/icons/grass.svg';
import Ground from '../../../../public/icons/ground.svg';
import Ice from '../../../../public/icons/ice.svg';
import Normal from '../../../../public/icons/normal.svg';
import Poison from '../../../../public/icons/poison.svg';
import Psychic from '../../../../public/icons/psychic.svg';
import Rock from '../../../../public/icons/rock.svg';
import Steel from '../../../../public/icons/steel.svg';
import Water from '../../../../public/icons/water.svg';

interface Props {
	icon: string;
}

export default function TypeIcon({ icon }: Props) {
	switch (icon) {
		case 'bug':
			return <Bug width="20px" height="20px" viewBox="0 0 512 512"></Bug>;
		case 'dark':
			return <Dark width="20px" height="20px" viewBox="0 0 512 512"></Dark>;
		case 'dragon':
			return <Dragon width="20px" height="20px" viewBox="0 0 512 512"></Dragon>;
		case 'electric':
			return (
				<Electric width="20px" height="20px" viewBox="0 0 512 512"></Electric>
			);
		case 'fairy':
			return <Fairy width="20px" height="20px" viewBox="0 0 512 512"></Fairy>;
		case 'fighting':
			return (
				<Fighting width="20px" height="20px" viewBox="0 0 512 512"></Fighting>
			);
		case 'fire':
			return <Fire width="20px" height="20px" viewBox="0 0 512 512"></Fire>;
		case 'flying':
			return <Flying width="20px" height="20px" viewBox="0 0 512 512"></Flying>;
		case 'ghost':
			return <Ghost width="20px" height="20px" viewBox="0 0 512 512"></Ghost>;
		case 'grass':
			return <Grass width="20px" height="20px" viewBox="0 0 512 512"></Grass>;
		case 'ground':
			return <Ground width="20px" height="20px" viewBox="0 0 512 512"></Ground>;
		case 'ice':
			return <Ice width="20px" height="20px" viewBox="0 0 512 512"></Ice>;
		case 'normal':
			return <Normal width="20px" height="20px" viewBox="0 0 512 512"></Normal>;
		case 'poison':
			return <Poison width="20px" height="20px" viewBox="0 0 512 512"></Poison>;
		case 'psychic':
			return (
				<Psychic width="20px" height="20px" viewBox="0 0 512 512"></Psychic>
			);
		case 'rock':
			return <Rock width="20px" height="20px" viewBox="0 0 512 512"></Rock>;
		case 'steel':
			return <Steel width="20px" height="20px" viewBox="0 0 512 512"></Steel>;
		case 'water':
			return <Water width="20px" height="20px" viewBox="0 0 512 512"></Water>;
		default:
			return <></>;
	}
}
