import React from "react";
import styled from "styled-components/macro";

//Heading 1
const Text1 = styled.p`
  font-size: ${props => props.theme.fontSizes[7]};
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: ;
  padding: 0;
  margin: ${props => props.theme.space[4]} 0;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Heading1(props) {
  return (
    <Text1 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text1>
  );
}

//Heading 2
const Text2 = styled.p`
  font-size: ${props => props.theme.fontSizes[6]};
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: ;
  padding: 0;
  margin: ${props => props.theme.space[4]} 0;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Heading2(props) {
  return (
    <Text2 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text2>
  );
}

//Heading 3
const Text3 = styled.p`
  font-size: ${props => props.theme.fontSizes[5]};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ;
  padding: 0;
  margin: ${props => props.theme.space[4]} 0;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Heading3(props) {
  return (
    <Text3 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text3>
  );
}

//Heading 4
const Text4 = styled.p`
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ;
  padding: 0;
  margin: ${props => props.theme.space[4]} 0;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Heading4(props) {
  return (
    <Text4 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text4>
  );
}

//Heading 5
const Text5 = styled.p`
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ;
  padding: 0;
  margin: ${props => props.theme.space[4]} 0;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Heading5(props) {
  return (
    <Text5 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text5>
  );
}

//Heading 6
const Text6 = styled.p`
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ;
  padding: 0;
  margin: ${props => props.theme.space[4]} 0;
  color: ${props => (props.isDark ? `white` : ``)};
`;

export function Heading6(props) {
  return (
    <Text6 as={props.as} isDark={props.isDark}>
      {props.text}
    </Text6>
  );
}
