import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setRange} from "../redux/Range-reducer";

function NumericInput(props) {

    const InitialValue = useSelector(state => state.RangeReducer.InitialValue)
    const [count, setCount] = useState(InitialValue);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setRange(count))
    }, [count]);

    let {min, max} = props
    if (count > max) {
        setCount(max)
    } else if (count < min) {
        setCount(min)
    }

    const maxLengthCheck = (e) => {
        let value = e.target.value
        let LastValue
        if (Number.isInteger(value)) {
            LastValue = value
        } else if((value).toString().length > 3 ){
            LastValue = Math.round(value)
        }
        if (LastValue > max) {
            LastValue = max
        } else if (LastValue < min) {
            LastValue = min
        }
        setCount(LastValue)
    }

    return (
        <div>
            <p>Введите {min} до {max} </p>
            <button onClick={() => setCount(+count - 1)}>-</button>
            <input
                type="number"
                value={count}
                min={min}
                max={max}
                onInput={maxLengthCheck}/>
            <button onClick={() => setCount(+count + 1)}>+</button>

        </div>
    );
}

export default NumericInput;
