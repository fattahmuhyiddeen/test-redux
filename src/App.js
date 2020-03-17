import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setName } from './redux/ducks/profile';
import Sample from './Sample';
import { editValue } from './redux/ducks/general';

function App(props) {
  return (
    <div
      // onClick={() => props.setName('hello')}
      onClick={() => props.editValue()}
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
  setName,
  editValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
