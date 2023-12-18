import {useSelector} from "react-redux"

export default function DisplayCounter(){
 const {counterVal}= useSelector(store=>store.counter);
    return <>
      <p className="lead mb-4">
        counter current value is:{counterVal}
      </p>
    
    </>
}