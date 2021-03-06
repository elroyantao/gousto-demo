import 'isomorphic-fetch'

export const fetchCategoriesRequest = () => ({
  type: 'FETCH_CATEGORIES_REQUEST'
})

export const fetchCategoriesResponse = (categories) => ({
  type: 'FETCH_CATEGORIES_RESPONSE',
  categories
})

export const fetchCategoriesFailure = () => ({
  type: 'FETCH_CATEGORIES_FAILURE'
})

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoriesRequest())
  return fetch('/api/categories', { method: 'GET' })
  .then((res) => {
    if (!res.ok) throw Error(res.statusText)
    return res.json()
  })
  .then((res) => {
    dispatch(fetchCategoriesResponse(res.data))
  })
  .catch(() => {
    dispatch(fetchCategoriesFailure())
  })
}
