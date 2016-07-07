/**
 * Created by leiyouwho on 6/15/16.
 */

import Immutable from 'immutable';
import * as StoryBoardAction from '../actions/StoryBoardAction';

import reduxActionHandler from '../utils/redux/ActionHandler/';

const defaultState = Immutable.Map({
  components: Immutable.List([]),
  selectedComponentIndex: null,
});


const ADD_COMONENT_ACTION = new reduxActionHandler.handleAction(StoryBoardAction.ADD_COMPONENT)
  .success((state, action) => {
    let components = state.get('components');
    components = components.push(Immutable.Map({
      componentName: action.componentName,
      props: Immutable.fromJS(action.props),
    }));
    return state.set('components', components);
  });

const SELECT_COMPONENT_ACTION = new reduxActionHandler.handleAction(StoryBoardAction.SELECT_COMPONENT)
  .success((state, action) => {
    return state.set('selectedComponentIndex', action.index);
  });

export default reduxActionHandler.handleActions(
  [ADD_COMONENT_ACTION, SELECT_COMPONENT_ACTION],
  defaultState,
  /^StoryBoardReducer\//
);

// export default (state = defaultState, action) => {
//   switch (action.type) {
//     case StoryBoardAction.ADD_COMPONENT:
//       let components = state.get('components');
//       components = components.push(Immutable.Map({
//         componentName: action.componentName,
//         props: action.props,
//       }));
//       return state.set('components', components);
//     case StoryBoardAction.SELECT_COMPONENT:
//       return state.set('selectedComponentIndex', action.index);
//     default:
//       return state;
//   }
// };
