import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './reducer';

export default configureStore({
    reducer: {
        settings: settingsReducer
    },
})