import * as React from "react";
import {useEffect} from "react";
import {useApplicationAccountDispatch, useApplicationAccountSelector} from "./Store";
import {setId} from "./Store";

export const AppComponent = (): JSX.Element => {
    const accountState = useApplicationAccountSelector();
    const accountDispatch = useApplicationAccountDispatch();

    useEffect(() => {
        accountDispatch(setId(1234))
        accountDispatch(setId(123))

        return () => {}
    }, [])

    return (
        <span>Test {accountState.id}</span>
    );
}