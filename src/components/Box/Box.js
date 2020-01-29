import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: ${props => (props.p ? props.p : props.theme.space[3])};
  padding-left: ${props => (props.pl ? props.pl : "")};
  padding-right:${props => (props.pr ? props.pr : "")};
  padding-top:${props => (props.pt ? props.pt : "")};
  padding-bottom:${props => (props.pb ? props.pb : "")};
  margin: ${props => (props.m ? props.m : "0 0 1rem 0")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-right:${props => (props.mr ? props.mr : "")};
  margin-top:${props => (props.mt ? props.mt : "")};
  margin-bottom:${props => (props.mb ? props.mb : "")};
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  text-align: ${props => (props.textAlign ? props.textAlign : "")};
}
`;

const Box = props => {
  return (
    <Wrapper
      p={props.p}
      pt={props.pt}
      pr={props.pr}
      pb={props.pb}
      pl={props.pl}
      m={props.m}
      mt={props.mt}
      mr={props.mr}
      mb={props.mb}
      ml={props.ml}
      textAlign={props.textAlign}
      color={props.color}
      bgColor={props.bgColor}
    >
      {props.children}
    </Wrapper>
  );
};

export default Box;
