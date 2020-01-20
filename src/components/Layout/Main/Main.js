import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.main`
  background-color: ${props => props.theme.colors.appMainBg};
  margin-top: ${props => props.theme.heights.appTopbarHeight};
  display: flex;
  flex: 1;
  flex-basis: 0.000000001px;
`;
const Content = styled.div`
  flex: 1;
  padding: ${props => props.theme.space[4]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  &[data-guide="guide-persistent-and-visible"] {
    margin-left: ${props => props.theme.widths.appSidebarWidth};
  }

  &[data-guide="mini-guide-visible"] {
    margin-left: ${props => props.theme.widths.appMiniGuideWidth};
  }
`;

function Main(props) {
  return (
    <Wrapper role="main" id="content">
      <Content>
        <p>
          <a href="http://google.com">link</a>
          1Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sint?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, esse
          eveniet odio dolorem voluptas illo consequuntur modi corporis, veniam
          tenetur, suscipit qui doloribus temporibus atque voluptatum! Dolore ad
          numquam tempore repellendus laudantium iure consequatur iusto quas
          doloremque corrupti doloribus, quod corporis pariatur temporibus sed
          cupiditate repellat accusamus incidunt excepturi. Corporis, itaque
          repellat nostrum ipsa vel quae velit reiciendis aliquid in. Optio,
          dicta? Explicabo illum rem, temporibus quod quae ad. Unde repellat
          eligendi nulla quidem nobis id, dolorem quas possimus ratione quos
          nemo nihil commodi similique blanditiis sed facere veniam sequi
          aperiam, alias dolore. Mollitia aliquam nihil dolorem aut esse
          inventore.
        </p>
      </Content>
    </Wrapper>
  );
}

export default Main;
