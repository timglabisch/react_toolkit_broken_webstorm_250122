import {configureStore, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {createSlice} from "@reduxjs/toolkit";

interface AccountsState {
    id: number
}

const initialState: AccountsState = {
    id: 0,
};

const accountsSlice = createSlice({
    name: "AccountSlice",
    initialState,
    reducers: {
        setId: (state: AccountsState, idPayload: PayloadAction<number>) => {
            state.id = idPayload.payload
        },
    },
});

export const { setId } = accountsSlice.actions;

const applicationStore = configureStore({
    devTools: {
        name: "ApplicationStore"
    },
    reducer: {
        accounts: accountsSlice.reducer
    },
});

export const useApplicationAccountDispatch = () => useDispatch<typeof applicationStore.dispatch>();
export const useApplicationAccountSelector = (): AccountsState => useSelector((storeState: ReturnType<typeof applicationStore.getState>) => storeState.accounts);