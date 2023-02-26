import styled from 'styled-components';
import { VT323 } from '@next/font/google';
const font = VT323({
	subsets: ['latin'],
	style: 'normal',
	weight: '400',
});

export const PokemonName = styled.p`
	font-size: 1.5em;
	color: ${(props) => props.color};
`;
export const Img = styled.img`
	width: 100%;
	image-rendering: pixelated;
	transition: 0.2s ease-in-out;
`;
export const PokemonID = styled.span`
	font-size: 0.8em;
	color: #d1d1d1;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 80%;
    padding: 10px;
    background-color: ${(props) => props.color}25;
    border-radius: 15px;
    border: 2px solid #d1d1d1;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    transition: 0.2s ease-in-out;

    &:hover ${Img} {
        width: 110%;
        -webkit-animation-name: wiggle;
          -ms-animation-name: wiggle;
          -ms-animation-duration: 1000ms;
         -webkit-animation-duration: 1000ms;
        -webkit-animation-iteration-count: 1;
          -ms-animation-iteration-count: 1;
          -webkit-animation-timing-function: ease-in-out;
          -ms-animation-timing-function: ease-in-out;
    }

        @-webkit-keyframes wiggle {
        0% {-webkit-transform: rotate(10deg);}
        25% {-webkit-transform: rotate(-10deg);}
        50% {-webkit-transform: rotate(20deg);}
        75% {-webkit-transform: rotate(-5deg);}
        100% {-webkit-transform: rotate(0deg);}
        }

        @-ms-keyframes wiggle {
        0% {-ms-transform: rotate(1deg);}
        25% {-ms-transform: rotate(-1deg);}
        50% {-ms-transform: rotate(1.5deg);}
        75% {-ms-transform: rotate(-5deg);}
        100% {-ms-transform: rotate(0deg);}
        }

        @keyframes wiggle {
        0% {transform: rotate(10deg);}
        25% {transform: rotate(-10deg);}
        50% {transform: rotate(20deg);}
        75% {transform: rotate(-5deg);}
        100% {transform: rotate(0deg);}
        }
                }
    &:hover {
        border: 2px solid #bbbbbb;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
`;
