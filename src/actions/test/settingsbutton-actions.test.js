import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const fetchMap = () => ({
  type: 'GET_SETTINGS'
});

describe('quiz async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('should send GET_SETTINGS action and get correct snapshot', () => {
	const store = mockStore({ map: [], loading: [], errors: [] });
    store.dispatch(fetchMap());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should send GET_SETTINGS action and get right actions', () => {
    const expectedActions = [
      { type: 'GET_SETTINGS' }
    ];

    const store = mockStore({ quizzes: [], loading: [], errors: [] });
	store.dispatch(fetchMap());
    expect(store.getActions()).toEqual(expectedActions);
  });


});




