import * as React from 'react';
import {Pivot, PivotItem } from '@fluentui/react';
import "./header.css"


export const PivotBasicExample: React.FunctionComponent = () => {

    return (
        <Pivot aria-label="Basic Pivot Example">
            <PivotItem className="Text" headerText="Home">
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