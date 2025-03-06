import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { habitsApi } from "./apis/habitsApi";

const store = configureStore({
    reducer: {
        [habitsApi.reducerPath]: habitsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(habitsApi.middleware);
    }
});

setupListeners(store.dispatch);

export { store };
export { useFetchHabitsQuery } from "./apis/habitsApi";