import { configureStore, createSlice } from '@reduxjs/toolkit'

// createSlice 함수를 사용하면 state, reducer를 한번에 정의할 수 있어서 코드량을 줄여준다
// 이것만 쓸 것 같은데😅
const toDoSlice = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      state.push({ text: payload, id: Date.now() })
    },
    remove: (state, { payload }) => state.filter((el) => el.id !== +payload),
  },
})

export const { add, remove } = toDoSlice.actions
export default configureStore({ reducer: toDoSlice.reducer })
