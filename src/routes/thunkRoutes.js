/**
 * @date:2019-03-01$ 15:20$
 * @author:ljl$
 */
import React from 'react'
// import {Route, Switch} from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import NotFoundPage from '../pages/404Page'

const NotFoundRoute = ({match, location}) => {
	console.log('Tag route')
	return (
		<DocumentTitle title={'页面不存在'}>
			<NotFoundPage/>
		</DocumentTitle>
	)
}

export {NotFoundRoute}
