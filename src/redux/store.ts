import { configureStore } from "@reduxjs/toolkit";
import pokedexReducer from "./pokedexSlice";

const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
