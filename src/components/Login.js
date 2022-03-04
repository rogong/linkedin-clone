import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signInGoogleAPI } from '../actions';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>

        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professsional community</h1>
          <img src="/images/home-rigght-side-img.svg" alt="" />
        </Hero>
        <Form>
          {/* <form>
            <input type="text" placeholder="Email or phone number" />
            <input type="text" placeholder="Password (6+ characters)" />

            <p>
              By clicking Agree & Join, you agree to the linkedIn
              <a href="#"> User Agreement </a>
              <a href="#"> Privacy Policy </a> , and
              <a href="#"> Cookie Policy </a>
            </p>

            <button>Agree & Join</button>
          </form> */}

          <Google onClick={() => props.SignIn()}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>

          {/* <LineContainer>
            <Line /> or <Line />
          </LineContainer>
          <SignUp>
            <button>
              Already on LinkedIn? <a href="#"> Sign in </a>
            </button>
          </SignUp> */}
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0.8, 0.9);
    text-decoration: none;
    cursor: pointer;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    cursor: pointer;
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans',
      Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande', Helvetica, Arial,
      sans-serif;
    color: #8f5849;
    font-weight: 100;
    line-height: 1.2;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    // z-index: -1;
    padding-bottom: 0;
    width: 650px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -140px;
    top: -30px;
    @media (max-width: 768px) {
      top: 270px;
      width: 300px;
      height: 300px;
      right: 100px;
      text-align: center;
    }
  }
`;

const Form = styled.div`
  margin-top: 50px;
  width: 408px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }

  form {
    display: grid;
    flex-direction: column;
  }

  input {
    outline-width: 0;
    height: 40px;
    margin-bottom: 14px;
    padding: 5px 15px;
  }

  p {
    font-size: 14px;
    line-height: 1.42857;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    margin: 12px 0;
    & > a {
      color: #2977c9;
      font-weight: 600;
      font-size: 13px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  button {
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    border: none;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
      inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rb(0 0 0 / 0);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: #000;
    margin: 10px 0px 15px;
    cursor: pointer;

    &:hover {
      background-color: #0073b1;
      color: #fff;
    }
    & > a {
      color: #2977c9;
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SignUp = styled.div`
  button {
    background-color: #fff;
    border: solid 1px #0a66c2;
    background: transparent;
    color: rgba(0, 0, 0, 0.6);

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

const Line = styled.div`
  height: 1px;
  width: auto;
  background-color: rgb(0 0 0 / 0.35);
  flex-grow: 1;
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
};

const mapDispatchToProps = (dispatch) => ({
  SignIn: () => dispatch(signInGoogleAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
