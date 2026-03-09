import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actionCreators";

function Counter({ count, increment, decrement }) {
  return (
    <div className='p-4 h-auto flex flex-col items-center justify-center gap-5 bg-white rounded shadow'>
      <div className='text-4xl font-bold'>{count}</div>
      <div className='flex space-x-3'>
        <button onClick={() => decrement(1)} className='px-5 py-2 bg-red-500 text-white rounded'>Decrement</button>
        <button onClick={() => increment(5)} className='px-5 py-2 bg-green-500 text-white rounded'>Increment</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  console.log('ownProps' , ownProps);

  return {
    count: ownProps.dynamic ? state.counter.counter - 7 : state.counter.counter,
  }
}   

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic ? () => dispatch(increment(12)) : (value) => dispatch(increment(value)),
    decrement: ownProps.dynamic ? () => dispatch(decrement(22)) : (value) => dispatch(decrement(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);