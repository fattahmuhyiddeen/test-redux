import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setName } from './redux/ducks/profile';
import Sample from './Sample';

function App(props) {
  return (
    <div
      onClick={() => props.setName('hello')}
      className="container">
      <Sample />
    </div>
  );
}

const mapStateToProps = state => ({
  profile: state.profile
});

// Look how simple this is now!
const mapDispatchToProps = {
  setName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
