/**
 * @date:2019-03-01$ 16:10$
 * @author:ljl$
 */
import React, {Component} from 'react'
// import {connect} from "react-redux";
import {Input} from 'antd'
import {Link} from 'react-router-dom'
import style from './style.scss'
import debounce from 'lodash/debounce'
// import {actionCreator} from '@/utils/fetchGenerator'
// import {API_SEARCH} from "../../constants";
import { pageName } from '@/pages/SearchPage'
import { moduleName } from '@/pages/SearchPage/content'

const SearchPreviewItem = ({item}) => {
	return (
		<Link to={`/subject/${item.id}`}>
			<div className={style.searchPreviewItem} key={item.id}>
				<img src={item.images.large} className={style.previewImg} alt='xixixi'/>
				<div className={style.previewInfo}>
					<div className={style.previewItemTitle}>{item.title}</div>
					<div className={style.previewItemYear}>{item.year}</div>
					<div className={style.previewItemOriginalTitle}>{item.original_title}</div>
				</div>
			</div>
		</Link>
	)
}


class SearchPreview extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isHidden: false,
			bodyClickHandler: () => {
				this.setState({
					isHidden: true
				})
			},
			selfClickHandler: (e) => {
				e.stopPropagation()
			}
		}
	}

	componentDidMount() {
		document.body.addEventListener('click', this.state.bodyClickHandler)
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (this.isAbleToShowPreview()) {
			this.setState({
				isHidden: false
			})
		}
	}

	componentWillUnmount() {
		document.body.removeEventListener('click', this.state.bodyClickHandler)
	}

	isAbleToShowPreview() {
		return this.state.isHidden ||
			this.props.data.isLoading === true ||
			Object.prototype.toString.call(this.props.data.isLoading) === '[object Undefined]'
	}

	render() {
		if (this.isAbleToShowPreview()) {
			return null
		}
		let subjects = this.props.data.payload.subjects
		return (
			<div>
				{subjects.slice(0,6).map(item => {
					return (
						<SearchPreviewItem item={item} key={item.id}/>
					)
				})}
			</div>
		)
	}
}

class NavBar extends Component{
	searchQuery = (value) => {
		this.props.fetchQuery(value)
	}

	debouncedSearch = debounce(this.searchQuery, 300)

	render() {
		return (
			<div>
				<div className={style.globalNavItems}>
					<Link to={'/'}>豆瓣</Link>
					<a href='/read'>读书</a>
					<a href='/movie'>电影</a>
					<a href='/music'>音乐</a>
				</div>
				<div className={style.movieNav}>
					<div className={style.titleAndSearchWrapper}>
						<div className={style.titleAndSearch}>
							<Link className={style.title} to={'/'}>
								豆瓣电影
							</Link>
							<div className={style.searchBarWrapper}>
								<Input.Search
									placeholder="搜索电影、电视剧、综艺、影人"
									className={style.searchBar}
									onChange={(e) => {
										this.debouncedSearch(e.target.value)
									}}
									onSearch={
										(value) => {
											this.props.history.location.pathname = '/'
											this.props.history.push(`search?q=${value}`)
										}
									}
								/>
								{
									<SearchPreview data={this.props.searchPreview}/>
								}
							</div>
						</div>
					</div>
					<div className={style.movieCateNavWrapper}>
						<div className={style.movieCateNav}>
							<Link to="/cinema">影讯&购票</Link>
							<Link to="/chart">排行榜</Link>
							<Link to="/tag?q=电影">分类</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

let mapStateToProps = (state, ownProps) => {
	return {
		searchPreview: state[pageName][moduleName]
	}
}

export default NavBar
