import * as React from 'react';
import {Pivot, PivotItem } from '@fluentui/react';
import {useHistory} from "react-router-dom";


export const PivotBasicExample: React.FunctionComponent = () => {

    return (
        <Pivot aria-label="Basic Pivot Example">
            <PivotItem headerText="Home">
            </PivotItem>
            <PivotItem headerText="Channels">
            </PivotItem>
            <PivotItem headerText="Posts">
            </PivotItem>
            <PivotItem headerText="Account">
            </PivotItem>
        </Pivot>
    );
};