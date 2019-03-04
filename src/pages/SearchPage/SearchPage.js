/**
 * @date:2019-03-04$ 15:12$
 * @author:ljl$
 */
import React, {Component} from 'react'
import {view as SearchData} from './content'

class SearchPage extends Component {
	render() {
		let query = this.props.query
		return (
			<div>
				<SearchData query={query}
					params={{
						query
					}}
				/>
			</div>
		)
	}
}

export default SearchPage
