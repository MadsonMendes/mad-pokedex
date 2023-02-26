import styled from 'styled-components';
import Github from 'public/github.svg';

export const HeroContainer = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 85vh;
	margin: 0;
`;

export const HeroTextContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	p {
		margin: 0 0 0.5em 0;
		width: 55%;
		text-align: center;
	}
`;

export const HeroText = styled.h1`
	margin: 0;
	font-size: 5em;
	color: #ed1c24;
`;

export const GH = styled(Github)`
	path {
		fill: #000;
		transition: 0.2s ease-in-out;
	}
	&:hover {
		cursor: pointer;

		path {
			transition: 0.2s ease-in-out;
			fill: #ed1c24;
		}
	}
`;
