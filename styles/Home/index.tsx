import styled from 'styled-components';
import Pokeball from '../../public/pokeball.svg';

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-auto-rows: 400px;
	gap: 10px;
	align-self: center;
	justify-items: center;
`;

export const Loader = styled(Pokeball)`
animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export const LoadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		font-family: sans-serif;
		color: #d1d1d1;
	}
`;
