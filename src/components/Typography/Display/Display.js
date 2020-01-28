import React from "react";
import styled from "styled-components/macro";

//Display 1
const Text1 = styled.p`
  font-size: ${props => props.theme.fontSizes[8]};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: ;
  padding: ;
  margin: ;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Display1(props) {
  return (
    <Text1 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text1>
  );
}

//Display 2
const Text2 = styled.p`
  font-size: ${props => props.theme.fontSizes[7]};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: ;
  padding: ;
  margin: ;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Display2(props) {
  return (
    <Text2 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text2>
  );
}

//Display 3
const Text3 = styled.p`
  font-size: ${props => props.theme.fontSizes[6]};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: ;
  padding: ;
  margin: ;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Display3(props) {
  return (
    <Text3 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text3>
  );
}

//Display 4
const Text4 = styled.p`
  font-size: ${props => props.theme.fontSizes[5]};
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: ;
  padding: ;
  margin: ;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Display4(props) {
  return (
    <Text4 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text4>
  );
}
