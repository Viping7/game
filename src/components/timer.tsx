import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const Container = styled.div`
  margin-top: 50px;
  font-size: 25px;
  tex
`;

const Timer: React.FC = () => {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(currentTime + 1);
    }, 1000)
  }, [currentTime]);
  
  return (
    <Container>
      {currentTime}
    </Container>
  );

}
export default Timer;
