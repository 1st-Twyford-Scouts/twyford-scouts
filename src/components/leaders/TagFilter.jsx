import { connect } from 'react-redux'
import TagFilterControl from './TagFilterControl'
import { tagsSelect } from '../../state/actions/tagActions'

const mapStateToProps = (state) => {
    return {
        selected: state.tags.selected,
        tags: state.tags.list
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        OnTagSelect: event => { dispatch(tagsSelect(event.target.value)) }
    }
}

const TagFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(TagFilterControl)

export default TagFilter