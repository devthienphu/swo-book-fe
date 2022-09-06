import {combineReducers } from 'redux'

import videoSelectorReducer from '../frontend/VideoSelector/videoSelectorSlice'

const rootReducer = combineReducers({
    videoSelector: videoSelectorReducer
})

export default rootReducer;