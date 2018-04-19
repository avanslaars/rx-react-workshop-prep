import { ofType } from 'redux-observable'
import { map, debounceTime } from 'rxjs/operators'

const initState = {
  inputValue: '',
  displayValue: ''
}

export const updateCurrent = val => ({ type: 'INPUT_CHANGE', payload: val })

export const inputEpic = action$ => {
  return action$.pipe(
    ofType('INPUT_CHANGE'),
    debounceTime(500),
    map(({ payload }) => ({ type: 'DISPLAY_UPDATE', payload }))
  )
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, inputValue: action.payload }
    case 'DISPLAY_UPDATE':
      return { ...state, displayValue: action.payload }
    default:
      return state
  }
}

export default reducer
