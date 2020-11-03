import reducer from '../settings-reducer';

describe('settings reducer', () => {
  const initState = {
	 settings: {},
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
          settings: [],
      }
    )
  });

  it('returns the correct state on success', () => {
    const action = { type: 'GET_SETTINGS', payload: '' };
    const expectedRes = { settings: {} };

    expect(reducer(undefined, action)).toEqual(expectedRes);
  });

});