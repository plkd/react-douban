/**
 * @date:2019-03-01$ 16:19$
 * @author:ljl$
 */
import actionTypeGenerator from "./actionTypeGenerator";
import {isCached, getCache} from '../redux-cache'

export default function actionCreator({
																				pageName,
																				moduleName,
																				URL,
																				fetchParams = {},
																				doesCache = false,
																				startProps = {},
																				successProps = {},
																				errorProps = {}
																			}) {
	const ACTION_TYPES = actionTypeGenerator(pageName, moduleName)
	return (dispatch) => {
		dispatch({
			type: ACTION_TYPES.START,
			idLoading: true,
			...startProps
		})

		if (isCached(URL)) {
			dispatch({
				type: ACTION_TYPES.SUCCESS,
				isLoading: false,
				payload: getCache(URL),
				...startProps
			})
		} else {
			fetch(URL, {...fetchParams}).then(response => {
				if (response.status !== 200) {
					throw new Error(`Fail to get response with status: ${response.status}`)
				}
				response.json().then(responseData => {
					let action = {
						type: ACTION_TYPES.SUCCESS,
						isLoading: false,
						payload: responseData,
						...successProps
					}

					if (doesCache) {
						action = {
							...action,
							cacheKey: URL,
							cacheValue: responseData
						}
					}
					dispatch(action)
				}).catch(err => {
					throw new Error('invalid json response: ' + err)

				})
			}).catch(error => {
				dispatch({
					type: ACTION_TYPES.ERROR,
					isLoading: false,
					error: error,
					...errorProps
				})
			})
		}

	}
}
