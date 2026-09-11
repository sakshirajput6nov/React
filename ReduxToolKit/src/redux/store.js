// step 1 install
// 2 step to create redux store then
//  step 3 : provide the redux store to react 
// step 4: create a redux state slice
// step 5: register reducer
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer
    },
})