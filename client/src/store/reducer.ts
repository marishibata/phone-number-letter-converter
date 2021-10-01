import { PhoneWordsActionTypes } from "./types";

const initalPhonewordState = {
  lettersData: [],
  isFetching: true,
  errorMessage: undefined
}

export const phoneWordsReducer = (state = initalPhonewordState, action: any) => {
  switch (action.type) {
    case PhoneWordsActionTypes.FETCH_PHONEWORDS_START:
      return {
        ...state,
        isFetching: true
      }
    case PhoneWordsActionTypes.FETCH_PHONEWORDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lettersData: action.payload
      }
    case PhoneWordsActionTypes.FETCH_PHONEWORDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    case PhoneWordsActionTypes.CLEAR_PHONEWORDS:
      return {
        ...state,
        lettersData: []
      }
    default: return state;
  }
}