// @ts-check

import { connect } from 'react-redux'
import TagFilterControl from './TagFilterControl'
import { select } from '../../state/reducers/tagsReducer'

const mapStateToProps = (state) => {
    return {
        selected: state.tags.selected,
        tags: state.tags.list
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        OnSelect: event => { dispatch(select(event.target.value)) }
    }
}

const TagFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(TagFilterControl)

export default TagFilter