import React from 'react';
import styled from "styled-components";

import Missiles from './missiles';
import FinishLine from './finish-line';
import Player from './player';
import Timer from './timer';

const Wrapper = styled.div`
    height: 70%;
`;

const PlayGround = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

const Main: React.FC = () => {
    return (
        <Wrapper>
            <Timer />
            <PlayGround>
                <Player />
                <Missiles />
                <FinishLine />
            </PlayGround>
        </Wrapper>
    );
}
export default Main;
