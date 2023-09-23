import { configureStore } from "@reduxjs/toolkit";
import searchPerson from "../modules/searchPerson";

const store = configureStore({
  reducer: {
    searchPerson: searchPerson
  },
});

export default store;
