import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { theme: 'dark' };

const mainStoreSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme == 'dark' ? 'light' : 'dark';
    },
  },
});

// Use the PayloadAction type to declare the contents of `action.payload`
/*incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },*/

const store = configureStore({
  reducer: {
    app: mainStoreSlice.reducer,
    //anotherSlice: ....
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const appActions = mainStoreSlice.actions;

export default store;
