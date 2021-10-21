export function tagsSelect(value) { return { type: "tags/select", value } }
export function tagsPopulate(tags) { return { type: "tags/populate", tags: tags } }