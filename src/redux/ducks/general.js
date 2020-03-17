
export const editValue = () => ({
  type: 'zzzz',
})

const initialState = {
  value: 8,
  numbers: [1, 2, 3, 4, 5, 6]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'zzzz':
      alert('dari general')
      return { ...state, value: 9 }
    default:
      return state;
  }
}