import React from 'react';
import { connect } from 'react-redux';

const Header = props => <div>{props.general.value}</div>;

const a = state => ({
  profile: state.profile,
  general: state.general
})

export default connect(a)(Header);