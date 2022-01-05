export const SET_TRADE_MODAL_VISIBILITY = 'SET_TRADE_MODAL_VISIBILITY'

export const setTradeModalVisibilitySuccess = (isVisible) => ({
  type: SET_TRADE_MODAL_VISIBLITY,
  payload: { isVisible }

})


export function setTradeModalVisibility(isVisible) {
  return dispatch => {
    dispatch(setTradeModalVisibilitySuccess(isVisible))
  }
}


