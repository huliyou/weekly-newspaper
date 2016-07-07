/**
 * Created by leiyouwho on 6/14/16.
 */

import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { RaisedButton, Paper, Toolbar, ToolbarGroup } from 'material-ui';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Explore from 'material-ui/svg-icons/action/explore';
import Code from 'material-ui/svg-icons/action/code';
import getComponent from '../../public/getComponent';
import ComponentCell from './ComponentCell';
import * as StoryBoardAction from '../../actions/StoryBoardAction';

class StoryBoard extends React.Component {
  static propTypes = {
    components: PropTypes.instanceOf(Immutable.List),
    selectedComponentIndex: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
  };
  _renderComponents(components) {
    const views = [];
    components.forEach((component, index) => {
      const Com = getComponent(component.get('componentName'));
      views.push(
        <ComponentCell
          key={index}
          componentIndex={index}
          selectedComponentIndex={this.props.selectedComponentIndex}
          onClick={() => this.props.dispatch(StoryBoardAction.selectComponent(index))}
        >
          <Com {...component.get('props').toJS()} />
        </ComponentCell>
      );
    });
    return views;
  }
  render() {
    return (
      <Paper
        zDepth={5}
        style={{
          flex: 2,
        }}
      >
        <Toolbar>
          <ToolbarGroup firstChild >
            <RaisedButton label="保存" icon={<AddCircle />} primary />
            <RaisedButton label="jsxJSON" icon={<Code />} primary />
            <RaisedButton label="预览" icon={<Explore />} primary />
            <RaisedButton label="清空" icon={<ActionDeleteForever />} secondary />
          </ToolbarGroup>
        </Toolbar>
        <Paper
          style={{
            margin: '10px 10px',
          }}
        >
          {this._renderComponents(this.props.components)}
        </Paper>
      </Paper>
    );
  }
}

export default StoryBoard;
