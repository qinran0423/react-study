import PropTypes from 'prop-types'


export default {
	children: PropTypes.node,
	groupDatas: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
	})),
	chooseDatas: PropTypes.arrayOf(PropTypes.string),
	singleData: PropTypes.shape({
		value: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
	})
}