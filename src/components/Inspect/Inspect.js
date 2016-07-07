/**
 * Created by leiyouwho on 6/14/16.
 */

import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { List, ListItem, Subheader, TextField } from 'material-ui';
import ConnectStore from '../../utils/redux/ConnectStore';

@ConnectStore
class Inspect extends React.Component {
  static propTypes = {
    components: PropTypes.instanceOf(Immutable.List),
    selectedComponentIndex: PropTypes.number,
  };
  renderProps() {
    if (this.props.selectedComponentIndex !== undefined) {
      // console.log(this.props.components.get(this.props.selectedComponentIndex).get('props').title);
      const views = [];
      const componentProps = this.props.components.get(this.props.selectedComponentIndex);
      if (componentProps !== undefined) {
        Object.keys(componentProps.get('props').toJS()).map((key, index) => {
          views.push(
            <ListItem key={index}>
              <TextField
                style={{ width: '100%' }}
                floatingLabelText={key}
                {...this.props.bindReducer(
                  `StoryBoardReducer/components/${this.props.selectedComponentIndex}/props/${key}`
                )}
              />
            </ListItem>
          );
        });
        return views;
      }
    }
  }
  render() {
    return (
      <div
        style={{
          flex: 1,
        }}
      >
        <List>
          <Subheader>检查器</Subheader>
          {this.renderProps()}
        </List>
      </div>
    );
  }
}

export default Inspect;
