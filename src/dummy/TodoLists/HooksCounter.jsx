// import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actionCreators";
import { useDispatch, useSelector } from "react-redux";

function HooksCounter() {
    const count = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();
    const handleIncrement = (value) => {
        dispatch(increment(value));
    }
    const handleDecrement = (value) => {
        dispatch(decrement(value));
    }

    return (
        <div className='p-4 h-auto flex flex-col items-center justify-center gap-5 bg-white rounded shadow'>
        <div className='text-4xl font-bold'>{count}</div>
        <div className='flex space-x-3'>
            <button onClick={() => handleDecrement(7)} className='px-5 py-2 bg-red-500 text-white rounded'>Decrement</button>
            <button onClick={() => handleIncrement(9)} className='px-5 py-2 bg-green-500 text-white rounded'>Increment</button>
        </div>
        </div>
    );
}
// const mapStateToProps = (state) => {
//     return {
//         count: state.counter.counter
//     }
// }   

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: (value) => dispatch(increment(value)),
//         decrement: (value) => dispatch(decrement(value))
//     }
// }

export default HooksCounter;