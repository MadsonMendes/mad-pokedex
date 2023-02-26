import Image from 'next/image';
import styled from 'styled-components';
import TypeIcon from './TypeIcon';
import { colors } from 'data/colors';

interface Props {
	types: string[];
}

export default function Type({ types }: Props) {
	const Icon = styled.div`
		margin-bottom: -10px;
		svg {
			margin-top: -10px;
			margin-right: 5px;
		}
		svg:nth-child(1) path {
			fill: ${colors[`${types[0]}`]};
		}
		svg:nth-child(2) path {
			fill: ${colors[`${types[1]}`]};
		}
	`;
	if (types.length === 2) {
		return (
			<Icon>
				<TypeIcon icon={types[0]}></TypeIcon>
				<TypeIcon icon={types[1]}></TypeIcon>
			</Icon>
		);
	} else {
		return (
			<Icon>
				<TypeIcon icon={types[0]}></TypeIcon>
			</Icon>
		);
	}
}
