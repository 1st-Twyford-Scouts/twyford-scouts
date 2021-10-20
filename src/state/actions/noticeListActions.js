import { NOTICELIST_SELECTIONCHANGED } from './actionTypes'

export function noticeListSelectionChanged (value) {
    return {
        type: NOTICELIST_SELECTIONCHANGED,
        value
    }
}