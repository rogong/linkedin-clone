import React from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import Rightside from './Rightside';

const HomeMainSection = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a href="#">Hiring in a hurry? - </a>
        </h5>

        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <MainContainer>
      <Layout>
       <LeftSide />
       <Main />
      <Rightside />
      </Layout>
      </MainContainer>


    </Container>
  );
};

const Container = styled.div`
padding-top: 52px;
max-width: 100%;
`;

const Content = styled.div`
max-width: 1128px;
margin-left: auto;
margin-right: auto;
`;

const Section = styled.section`
min-height: 50px;
padding: 16px 0;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
display: flex;
justify-content: center;
h5 {
  color: #0a66c2;
  font-size: 14px;
  a {
    font-weight: 700;
  }
}
p {
  font-size: 14px;
  color: #434649;
  font-weight: 600;
}
@media (max-width: 768px) {
  flex-direction: column;
  padding: 0 5px;
}`;

const Layout = styled.div`
display: grid;
position: relative;
grid-template-areas: "leftside main rightside";
grid-template-columns: minmax(0, 20%) minmax(0, 50%) minmax(300px, 30%);
column-gap: 25px;
row-gap: 25px;
grid-template-rows: auto;
margin: 25px 0;
@media(max-width: 768px) {
  display: flex;
  flex-direction: column;
  padding: 0 5px;
}
`;

const  MainContainer = styled.div`
  
  @media(min-width: 768px) {
    margin: 0 20px 0 20px;
}
`;

export default HomeMainSection;
