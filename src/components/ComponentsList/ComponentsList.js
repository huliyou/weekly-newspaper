/**
 * Created by leiyouwho on 6/14/16.
 */

import React, { PropTypes } from 'react';
import { List, ListItem, Subheader, Divider } from 'material-ui';
import * as StoryBoardAction from '../../actions/StoryBoardAction';


import PureComponent from '../../utils/decorators/PureComponent';

@PureComponent
class ComponentsList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  _addComponent(componentName) {
    switch (componentName) {
      case 'Image':
        this.props.dispatch(StoryBoardAction.addComponent(componentName, { src: 'http://codropspz.tympanus.netdna-cdn.com/codrops/wp-content/uploads/2016/06/Collective223_holmes.png', height: '50px' }));
        return;
      case 'Title':
        this.props.dispatch(StoryBoardAction.addComponent(componentName, { title: '标题' }));
        return;
      case 'Brief':
        this.props.dispatch(StoryBoardAction.addComponent(componentName, { brief: '简介' }));
        return;
      case 'Link':
        this.props.dispatch(StoryBoardAction.addComponent(componentName, { src: 'http://huliyou.net', target: '_blank', content: '链接' }));
        return;
      default :
        return;
    }
  }
  render() {
    return (
      <List style={{ flex: 1 }}>
        <Subheader>组件</Subheader>
        <ListItem
          primaryText="图片"
          onTouchTap={() => {
            this._addComponent('Image');
          }}
        />
        <Divider />
        <ListItem
          primaryText="标题"
          onTouchTap={() => {
            this._addComponent('Title');
          }}
        />
        <Divider />
        <ListItem
          primaryText="简介"
          onTouchTap={() => {
            this._addComponent('Brief');
          }}
        />
        <Divider />
        <ListItem
          primaryText="链接"
          onTouchTap={() => {
            this._addComponent('Link');
          }}
        />
        <Divider />
      </List>
    );
  }
}

export default ComponentsList;
