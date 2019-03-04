/**
 * @date:2019-03-04$ 14:15$
 * @author:ljl$
 */
import {reducerGenerator} from '@/utils/fetchGenerator'
import {pageName, moduleName} from "./constant";

export default reducerGenerator(
	{
		pageName,
		moduleName,
		initialState: {}
	}
)
