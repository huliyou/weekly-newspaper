/**
 * Created by leiyouwho on 6/15/16.
 */

import React, { PropTypes } from 'react';

const styles = {
  width: '100%',
  height: '100%',
};

export default class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    height: PropTypes.string,
  };
  render() {
    return (
      <img {...this.props} style={[{ ...styles }, {height: this.props.height}]} />
    );
  }
}
