import React, { useContext } from 'react';
import styled from "styled-components";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import PlayerContext from '../context/player-info';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);

const Container = styled.div`
  margin-top: 30px
`;


const Instructions: React.FC = () => {
    // const classes = useStyles();
    // const player = useContext(PlayerContext);

    return (
      <Container>
        {/* <Button variant="contained" color="primary"
          className={classes.button}
          onClick={()=>{
            player["toggleRunning"]();
          }}
        >
          Move Right
        </Button> */}
      </Container>
    );

}
export default Instructions;
