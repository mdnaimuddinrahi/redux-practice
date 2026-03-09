import { ADD_BOOKING, REMOVE_BOOKING, RESET_FORM, UPDATE_FIELD } from "./actionTypes";

export const updateField = (field, value) => ({
  type: UPDATE_FIELD,
  payload: { field, value }
});

export const removeBooking = (id) => ({
  type: REMOVE_BOOKING,
  payload: id
});

export const addBooking = () => ({
  type: ADD_BOOKING
});

export const resetForm = () => ({
  type: RESET_FORM
});