import * as actionTypes from "./actionTypes"

export const increasecounter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,
})
export const decreasecounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
})

export const increaseByTwoCounter = () => ({
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2,
})
