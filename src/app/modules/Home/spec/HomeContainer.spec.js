import connectedContainer, { HomeContainer } from '../HomeContainer';
import configureStore from 'redux-mock-store'

describe('<HomeContainer />', () => {
  const initialState = {output:100}
  const mockStore = configureStore()
  let store,container
});