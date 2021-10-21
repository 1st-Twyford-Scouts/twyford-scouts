import { connect } from 'react-redux'
import NoticeListControl from './NoticeListControl'
import { noticesSelect } from '../../state/actions/noticeListActions'

const mapStateToProps = (state) => {
    return {
        selected: state.notices.selected,
        notices: state.notices.list
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onSelectionChanged: event => {
            dispatch(noticesSelect(event.target.value))
        }
    }
}

const NoticeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoticeListControl)

export default NoticeList