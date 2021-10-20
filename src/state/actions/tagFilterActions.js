import { TAGFILTER_CHANGED } from './actionTypes'

export function tagFilterChanged (value) {
    return {
        type: TAGFILTER_CHANGED,
        value
    }
}