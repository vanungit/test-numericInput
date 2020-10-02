
let inititalstate = {
    InitialValue:27
}
const RangeReducer = (state = inititalstate, action) => {
    switch (action.type) {
        case "SET_RANGE": {
            return {
                ...state,
                InitialValue: action.range
            }
        }

        default:
            return state;
    }
}
export default RangeReducer;

export const setRange= (range) => ({type: "SET_RANGE", range} )






