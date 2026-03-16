import { configureStore } from "@reduxjs/toolkit"
import { produce } from "immer"

const initialState = {
    name: "Dummy",
    address: {
        street: "K.B.Amin Ali Road",
        city: "Chattogram",
        country: "Bangladesh"
    }
}

const updateStreet = (street) => {
    return {
        type: "street_updated",
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "street_updated":
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draftState) => {
                draftState.address.state = action.payload
            })
        default:
            return state;
    }
}

const store = configureStore(reducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(updateStreet("Dummy Street"))