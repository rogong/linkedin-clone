import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import HomeMainSection from './HomeMainSection';

const Home = (props) => {
  return (
    <>
    {!props.user && <Redirect to='/' />}
      <Header />
     
      <HomeMainSection />
    
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
}

const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

