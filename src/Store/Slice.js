import {createSlice} from "@reduxjs/toolkit";

const Slice = createSlice({
    name: 'Slice',
    initialState: {
        names: []
    },
    reducers: {
        addName: (state, action) => {
            state.names.push({
                id: new Date().getTime(),
                ...action.payload.data,

            });
        },
        groovyName: (state, action) => {
            for (const n of state.names) {
                if (n.id !== action.payload.id) {
                    n.Nominal = !n.Nominal;
                }
            }
        },
        deleteName: (state, action) => {
            state.names = state.names.filter(name => name.id !== action.payload.id)
        }
    }

})

const nameReducer = Slice.reducer
export const {addName, groovyName, deleteName} = Slice.actions;
export default nameReducer