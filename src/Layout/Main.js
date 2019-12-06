import React, { Component } from "react";
import styled from "styled-components/macro";

const AppMain = styled.main`
  background-color: ${props => props.theme.colors.appMainBg};
  margin-top: ${props => props.theme.heights.appTopbarHeight};
  display: flex;
  flex: 1;
  flex-basis: 0.000000001px;
`;
const AppMainContent = styled.div`
  flex: 1;
  padding: ${props => props.theme.space[4]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  &[guide-persistent-and-visible] {
    margin-left: ${props => props.theme.widths.appSidebarWidth};
  }

  &[mini-guide-visible] {
    margin-left: ${props => props.theme.widths.appMiniGuideWidth};
  }

`;

class Main extends Component {
  render() {
    return (
      <AppMain role="main" id="content">
        <AppMainContent>
          <p>
            <a href="http://google.com">link</a>
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            sint? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quod, esse eveniet odio dolorem voluptas illo consequuntur modi
            corporis, veniam tenetur, suscipit qui doloribus temporibus atque
            voluptatum! Dolore ad numquam tempore repellendus laudantium iure
            consequatur iusto quas doloremque corrupti doloribus, quod corporis
            pariatur temporibus sed cupiditate repellat accusamus incidunt
            excepturi. Corporis, itaque repellat nostrum ipsa vel quae velit
            reiciendis aliquid in. Optio, dicta? Explicabo illum rem, temporibus
            quod quae ad. Unde repellat eligendi nulla quidem nobis id, dolorem
            quas possimus ratione quos nemo nihil commodi similique blanditiis
            sed facere veniam sequi aperiam, alias dolore. Mollitia aliquam
            nihil dolorem aut esse inventore.
          </p>
        </AppMainContent>
      </AppMain>
    );
  }
}

export default Main;
