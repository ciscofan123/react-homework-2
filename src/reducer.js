import {createSlice} from '@reduxjs/toolkit';

const defaults = {
    settings: {
        repository: 'philip1967/my-awesome-repo',
        build: 'npm ci && npm run build',
        branch: 'master',
        syncDuration: '10'
    }
}

const slice = createSlice({
    name: 'settings',
    initialState: defaults,
    reducers: {
        changeSettings: (state, action) => {
            if (action.payload && action.payload.repository !== undefined) {
                state.settings = action.payload;
            }
        }
    },
});

export const {changeSettings} = slice.actions;
export default slice.reducer;