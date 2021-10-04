import { PhoneWordsActionTypes } from "./types";

export const fetchPhoneWordsStart = () => ({
  type: PhoneWordsActionTypes.FETCH_PHONEWORDS_START
});

export const fetchPhoneWordsSuccess = (letters: string) => ({
  type: PhoneWordsActionTypes.FETCH_PHONEWORDS_SUCCESS,
  payload: letters
});

export const fetchPhoneWordsFailure = (errorMessage: string) => ({
  type: PhoneWordsActionTypes.FETCH_PHONEWORDS_FAILURE,
  payload: errorMessage
});

export const clearPhoneWords = () => ({
  type: PhoneWordsActionTypes.CLEAR_PHONEWORDS
});

export const fetchPhoneWordsAsync = (number: string) => {

  const url = `http://localhost:5000/number/${number}`

  return async (dispatch: any) => {
    dispatch(fetchPhoneWordsStart());

    const response = await fetch(url);
    console.log('url', response)
    const data = await response.json();
    console.log('data', data);

    const { success, error, phonewords } = data;
    // no rpoperty called phonewords

    if (!success) {
      dispatch(fetchPhoneWordsFailure(error))
    }
    console.log('phonewords', phonewords, data, 'data');
    dispatch(fetchPhoneWordsSuccess(data));
  }
};