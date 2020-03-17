import React from 'react';
import { connect } from 'react-redux';

const Header = props => <div>{props.profile.number}</div>;

const a = state => ({
  profile: state.profile
})

export default connect(a)(Header);