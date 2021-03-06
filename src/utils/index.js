export const getErrorMessage = (error) =>
    error.response.data.error || 'Something went wrong'

export const dispatchError = (dispatch, error) =>
    dispatch({
        type: 'set_error',
        payload: error.response?.data?.error || 'Something went wrong',
    })
