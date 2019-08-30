import React from 'react';
import ReactSVG from 'react-svg';
import styled from "styled-components";

const Symbol = styled.div`
  width: 100px;
  fill: #bb8cfc
`;

const FinishLine: React.FC = () => {
    return (
      <Symbol>
          <ReactSVG id='finish'
              src="finish-line.svg"
            />
      </Symbol>
    );

}
export default FinishLine;
