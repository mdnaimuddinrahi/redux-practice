import { useDispatch, useSelector } from "react-redux";
import { ADD_BOOKING } from "../redux/flightbook/actionTypes";
import FlightBookList from "./FlightBookList";
import { addBooking, updateField } from "../redux/flightbook/actionCreators";

export default function FlightBook() {
  const bookings = useSelector((state) => state.flight.bookings);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const flightData = {
    //   destination_from: formData.get("destination_from"),
    //   destination_to: formData.get("destination_to"),
    //   journey_date: formData.get("journey_date"),
    //   guests: formData.get("guests"),
    //   ticket_class: formData.get("ticket_class"),
    // };
    // Dispatch the flightData to Redux store
      dispatch(addBooking())
  };
  return (
    <section>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select 
                  className="outline-none px-2 py-2 w-full" 
                  name="destination_from" 
                  id="destination-from" 
                  onChange={(e) =>
                    dispatch(updateField("destination_from", e.target.value))
                  }
                  required
                  >
                  <option value="" hidden>Please Select</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="saidpur">Saidpur</option>
                  <option value="coxs-bazar">Cox's Bazar</option>
                </select>
              </div>
            </div>

            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select 
                  className="outline-none px-2 py-2 w-full" 
                  name="destination_to" id="destination-to" 
                  onChange={(e) =>
                    dispatch(updateField("destination_to", e.target.value))
                  }
                  required>
                  <option value="" hidden>Please Select</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="saidpur">Saidpur</option>
                  <option value="coxs-bazar">Cox's Bazar</option>
                </select>
              </div>
            </div>

            <div className="des-from">
              <p>Journey Date</p>
              <input 
                  type="date" 
                  className="outline-none px-2 py-2 w-full date" 
                  name="journey_date" 
                  id="journey-date" 
                  onChange={(e) =>
                    dispatch(updateField("journey_date", e.target.value))
                  }
                  required />
            </div>
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select 
                    className="outline-none px-2 py-2 w-full" name="guests" id="guests" 
                    onChange={(e) =>
                      dispatch(updateField("guests", e.target.value))
                    }
                    required>
                  <option value="" hidden>Please Select</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select 
                  className="outline-none px-2 py-2 w-full" 
                  name="ticket_class" 
                  id="ticket-class" 
                  onChange={(e) =>
                    dispatch(updateField("ticket_class", e.target.value))
                  }
                  required>
                  <option value="" hidden>Please Select</option>
                  <option value="business">Business</option>
                  <option value="economy">Economy</option>
                </select>
              </div>
            </div>

            <button 
              disabled={bookings.length >= 3}
              className={`w-full py-2 rounded-lg text-sm font-medium transition addCity
                ${
                  bookings.length >= 3
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed "
                    : "bg-purple-200 hover:bg-purple-300 text-purple-700 "
                }`}
              type="submit" 
              id="addCity"
              >
              <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>

      <FlightBookList/>
    </section>
  );
}