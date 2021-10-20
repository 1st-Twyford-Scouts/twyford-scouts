import { connect } from 'react-redux'
import TagFilterControl from './TagFilterControl'
import { tagFilterChanged } from '../../state/actions/tagFilterActions'

const mapStateToProps = (state) => {
    return {
        value: state.tags.filter,
        tags: state.tags.list
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onValueChanged: event => {
            dispatch(tagFilterChanged(event.target.value))
        }
    }
}

const TagFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(TagFilterControl)

export default TagFilter