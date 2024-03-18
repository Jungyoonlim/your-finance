import { UserActionTypes, UserState } from './type';

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case 'FETCH_USER_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_USER_DATA_SUCCESS':
      console.log('FETCH_USER_DATA_SUCCESS payload:', action.payload);
      return { ...state, data: action.payload };
    case 'FETCH_USER_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;