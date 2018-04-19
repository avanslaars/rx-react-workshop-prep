import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import searchReducer, { inputEpic } from './modules/searchApp'

const epicMiddleware = createEpicMiddleware(inputEpic)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  searchReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
)
