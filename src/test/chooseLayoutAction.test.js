import { updateLayout } from '../actions/chooseLayoutActions'
import { UPDATE_LAYOUT } from '../constants/ActionTypes'

describe('Update Layout Action', () => {
  it('should create an action to update layout', () => {
    const typeOfLayout = 'z-shape';

    const expectedAction = {
      type: UPDATE_LAYOUT,
      payload: typeOfLayout
    };

    expect(updateLayout(typeOfLayout)).toEqual(expectedAction);
  });
});