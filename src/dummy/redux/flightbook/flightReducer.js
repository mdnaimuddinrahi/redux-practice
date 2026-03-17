import { UPDATE_FIELD, ADD_BOOKING, REMOVE_BOOKING, RESET_FORM } from "./actionTypes";

const initialState = {
   form: {
      destination_from: "",
      destination_to: "",
      journey_date: "",
      guests: "",
      ticket_class: "",
  },
  bookings: [],  // To store all flight bookings
  nextId: 1, //incremental ID for bookings
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value,
        },
      };

    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, { ...state.form, id: state.nextId }],
        form: initialState.form, // reset after add
        nextId: state.nextId + 1, // increment ID
      };

    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        )
      };

    case RESET_FORM:
      return {
        ...state,
        form: initialState.form,
      };

    default:
      return state;
  }
};

export default flightReducer;