/**
 * @date:2019-03-04$ 15:13$
 * @author:ljl$
 */
import React, {Component} from 'react'
import viewGenerator from '@/utils/viewGenerator'
import {pageName, moduleName} from './constant'
import {API_SEARCH} from "../../../constants";
// import detailsComponentGenerator from '@/'

import style from './style.scss'


class SearchContent extends Component{
	constructor(props) {
		super(props)
		let start = 0
		let count = 20
		let startReg = /start=(\d*)/.exec(this.props.location.search)
		if (startReg && startReg[1] !== '') {
			start = startReg[1]
		}

		let countReg = /start=(\d*)/.exec(this.props.location.search)
		if (countReg && countReg[1] !== '') {
			count = countReg[1]
		}

		this.state = {
			id: this.props.match.params.id,
			start,
			count
		}
	}

	onQueryChange = (start) => {
		this.setState({
			start
		})
	}

	render() {
		let query = this.props.params.query
		let SearchView = this.searchDataView
		return (
			<div>

			</div>
		)
	}
}
