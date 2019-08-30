import React from 'react';
import styled, { keyframes } from "styled-components";
import { bounceInDown } from 'react-animations';
import ReactSVG from 'react-svg';

const Missile = styled.div`
    width: 30px;
    fill: #aaa;
    transform: rotate(40deg);
`;

const MissilesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 90%;
`;

const Bounce2s = styled(Missile)`
  animation: 3s ${keyframes `${bounceInDown}`} infinite
  `;
const Bounce3s = styled(Missile)`
  animation: 4s ${keyframes `${bounceInDown}`} infinite
  `;
const Bounce4s = styled(Missile)`
  animation: 5s ${keyframes `${bounceInDown}`} infinite
  `;

const Missiles: React.FC = () => {
    return (
        <MissilesContainer>
            <Bounce2s>
                <ReactSVG className='missle' id='1'
                src="missile.svg"
                />
            </Bounce2s>
            <Bounce3s>
                <ReactSVG className='missle'
                src="missile.svg"
                />
            </Bounce3s>
            <Bounce4s>
                <ReactSVG className='missle'
                src="missile.svg"
                />  
            </Bounce4s>
        </MissilesContainer>
    );
}

export default Missiles;
