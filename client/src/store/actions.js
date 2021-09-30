import { PhoneWordsActionTypes } from "./types";

export const fetchPhoneWordsStart = () => ({
  type: PhoneWordsActionTypes.FETCH_PHONEWORDS_START
});

export const fetchPhoneWordsSuccess = (letters) => ({
  type: PhoneWordsActionTypes.FETCH_PHONEWORDS_SUCCESS,
  payload: letters
});

export const fetchPhoneWordsFailure = (errorMessage) => ({
  type: PhoneWordsActionTypes.FETCH_PHONEWORDS_FAILURE,
  payload: errorMessage
});

export const clearPhoneWords = () => ({
  type: PhoneWordsActionTypes.CLEAR_PHONEWORDS
});

export const fetchPhoneWordsAsync = (number) => {

  const url = `http://localhost:5000/${number}`

  return async dispatch => {
    dispatch(fetchPhoneWordsStart());

    const response = await fetch(url);
    const data = await response.json();

    const { fetchPhoneWordsSuccess, error, phonewords } = data;

    if (!success) {
      dispatch(fetchPhoneWordsFailure(error))
    }
    dispatch(fetchPhoneWordsSuccess(phonewords))
  }
};