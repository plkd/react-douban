/**
 * @date:2019-03-01$ 16:18$
 * @author:ljl$
 */
export default (pageName, moduleName) => {
	const ACTION_PREFIX = `${pageName}/${moduleName}_`
	return ({
		START: ACTION_PREFIX + 'START',
		SUCCESS: ACTION_PREFIX + 'SUCCESS',
		FAILURE: ACTION_PREFIX + 'FAILURE'
	})
}
