// @ts-check

import { connect } from 'react-redux'
import NoticeListControl from './NoticeListControl'
import { select } from '../../state/reducers/noticesReducer'

const mapStateToProps = (state) => {
    return {
        selected: state.notices.selected,
        notices: state.notices.list
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: event => { dispatch(select(event.target.value)) }
    }
}

const NoticeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoticeListControl)

export default NoticeList