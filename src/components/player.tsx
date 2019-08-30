import React, {useState, useContext, useEffect} from 'react';
import ReactSVG from 'react-svg';
import styled,{keyframes} from "styled-components";
import PlayerContext from '../context/player-info';
import { css } from 'glamor'
import { slideInLeft } from 'react-animations';

const Symbol = styled.div`
  width: 50px
  fill: #aaa;
  height: 50px;
  `;


const Player: React.FC = () => {
    const player = useContext(PlayerContext);
    const [ direction, setDirection ] = useState('right');
    const [style, setStyle] = useState(css({
    }));
    const [gameOver, isGameOver] = useState(false);
    const [gameRunning, changeGameStatus] = useState(true);
    const [win, isWin] = useState(false);
    const isRunning = player["isRunning"];
    let positionX = 0,positionY = 0,finishLine;
    let moveRight,moveLeft;

    function changeDirection(event) {
      positionY = getPositions('runningMan')['y'];
      finishLine = getPositions('finish')['x'];
      if (event.keyCode == '39') {
        setDirection('right');
        clearInterval(moveRight);
        moveRight = null;
        if(!moveLeft){
          moveLeft = setInterval(function(){
            if(positionX > document.body.clientWidth-50){
              clearInterval(moveLeft);
            }
            positionX += 1;
            moveObject(positionX);
          },10)
        }
      }
      if (event.keyCode == '37') {
        setDirection('left')
        clearInterval(moveLeft);
        moveLeft = null;
          if(!moveRight){
            moveRight = setInterval(function(){
              if(positionX<=0){
                clearInterval(moveRight);
              }
              positionX -= 1;
              moveObject(positionX);
            },10)
          }
      }
    }
    
    function moveObject(i){
      setStyle(css({
        ' svg': {
          transform: `translateX(${i}px)`
        },
      }));
      checkForOverLapping(positionX,positionY);
      checkForVictory(i);
    }
    
    function reset(){
      positionX = 0;
      positionY = 0;
      moveLeft = null;
      moveRight = null; 
      setStyle(css({
        'svg': {
          transform: `translateX(0px)`
        }
      }));
      isGameOver(false);
      isWin(false);
      changeGameStatus(true);
    }

    function checkForOverLapping(x,y){
      let elements = document.querySelectorAll('.missle')
      if(elements){
        elements.forEach(ele=>{
          let elePos = ele.getBoundingClientRect();
          if(parseInt(elePos['y']) == 167){
          }
          if(isAroundArea(x,parseInt(elePos['x']),30) && isAroundArea(y,parseInt(elePos['y']),50)){
              isGameOver(true);
              changeGameStatus(false);
              clearInterval(moveRight);
              clearInterval(moveLeft);
            }
        })
      }
    }

    function checkForVictory(x){
      if(x == parseInt(finishLine)){
        isWin(true);
        changeGameStatus(false);
      }
    }

    function getPositions(selector){
      let element = document.getElementById(selector);
      if(element){
        return element.getBoundingClientRect();
      }
      return {}
    }

    function isAroundArea(playerPos,missilePos,range){
      if(playerPos <= missilePos && playerPos >= missilePos-range){
        return true
      }
    }
    useEffect(() => {
      onkeydown = changeDirection;
    }, []);
 
    return (
      <div> 
            {gameRunning ? 
      <Symbol>
          <ReactSVG  {...style} id='runningMan'
              src="running-man.svg"
            /> 
      </Symbol>: 
            gameOver ? 
              <div className='result'>
                <h1>Game Is Over</h1>
                <button onClick={()=>{reset()}}>Restart</button>
              </div>  
                :
                <div className='result'>
              <h1>Winner winner</h1>
              </div>
            }
      </div>
    );
}

export default Player;
