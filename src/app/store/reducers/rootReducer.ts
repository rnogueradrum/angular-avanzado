// Reducer que se le pasara a la store

import { ActionReducerMap } from "@ngrx/store";
import { IStore } from "../config/store.interface";
import { instrumentoReducer } from "./instrumentoReducer";


export const RootReducer: ActionReducerMap<IStore> = {
  instrumentoState: instrumentoReducer
}
