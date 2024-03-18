// src/redux/actions/userActions.ts
import { AppThunk } from '../store';

export const fetchUserData = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_USER_DATA_REQUEST' });

    // Make API call to fetch user data
    const response = await fetch('YOUR_API_ENDPOINT');
    const data = await response.json();

    dispatch({ type: 'FETCH_USER_DATA_SUCCESS', payload: data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch({ type: 'FETCH_USER_DATA_FAILURE', payload: error.message });
    }
  }
};