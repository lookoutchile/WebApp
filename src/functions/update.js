export const update =(list, id, data) => {
    const copy = [...list]
    copy.forEach((item, index) => {
        if (item.id === id) {
            item = {...item, ...data}
            copy[index] = item
        }
    })
    return copy
}