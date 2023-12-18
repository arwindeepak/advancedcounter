import { useRef } from "react";
import { useDispatch } from "react-redux"
import { privacyActions } from "./store/privacySlice";
import { counterActions } from "./store/counterSlice";

export default function Controls(){
  const inputElement=useRef();
  const dispatch=useDispatch();
  const handleIncrement=()=>{
  dispatch(counterActions.increment());
  }
  const handleDecrement=()=>{
    dispatch(counterActions.decrement());
  };
  const handleAdd=()=>{
    dispatch(counterActions.add( {num:inputElement.current.value}));
    inputElement.current.value="";
  }
  const handleSubtract=()=>{
    dispatch(
      counterActions.Subtract(
      {num:inputElement.current.value,})
  );
    inputElement.current.value="";
  }
  const privacyToggle=()=>{
    dispatch(privacyActions.toggle());
  };
    return (  <>
    
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={handleIncrement} type="button" className="btn btn-primary btn-lg px-4 gap-3">+1</button>
        <button onClick={handleDecrement} type="button" className="btn btn-outline-secondary btn-lg px-4">-1</button>
        <button onClick={privacyToggle} type="button" class="btn btn-warning">PrivacyToggle</button>
      </div>
      <br></br>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input type="text" 
        className=" btn-lg px-4 gap-3"
        placeholder="Enter number"
        ref={inputElement}
        />
       
        <button onClick={handleAdd} type="button" className="btn btn-outline-secondary btn-lg px-4">add</button>
        <button onClick={handleSubtract} type="button" class="btn btn-warning">Subtract</button>
      </div>
      </>
)
}