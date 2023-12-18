import {configureStore, createSlice} from "@reduxjs/toolkit"
import counterSlice from "./counterSlice";
import privacySlice from "./privacySlice";

const counterStore=configureStore({
    reducer:{
      counter:counterSlice.reducer,
      privacy:privacySlice.reducer
    }
});

export default counterStore;

// without using redux toolkit
// const INTIAL_VALUE={
//     counter:0,
//     privacy:false
// }

// const countReducer=(store=INTIAL_VALUE,action)=>{
//     if(action.type==="INCREMENT"){
//      return {...store,counter:store.counter+1}
//     }else if(action.type==="DECREMENT"){
//         return {...store,counter:store.counter-1}
//     }else if(action.type==="ADD"){
//         return{...store,counter:store.counter + Number(action.payload.num)}
//     }
//     else if(action.type==="SUBTRACT"){
//         return {...store,counter:store.counter - Number(action.payload.num)}
//     }
//     else if(action.type==="PRIVACY"){
//         return {...store,privacy:!store.privacy};
//     }
    
//     return store;
// }
