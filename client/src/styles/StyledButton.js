import styled from 'styled-components';
import { Button, } from 'semantic-ui-react';

const color = (type) => {
  switch(type) {
    case "edit":
      return "red"
    case "delete":
      return "green"
    default:
      return "white"
  }
};

const backgroundColor = (type) => {
  switch(type) {
    case "edit":
      return "green"
    case "delete":
      return "red"
    default:
      return "blue"
  }
};


export default styled(Button)`
  padding: 10px; 
  color: ${props => color(props.type)} !important;
  background: ${props => backgroundColor(props.type)} !important;
`;