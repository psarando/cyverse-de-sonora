/**
 * @author aramsey
 *
 * A wrapper component that goes around each page and provides the max
 * height that page can use.  This should enable dynamic scrolling capabilities.
 */

import React from "react";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material";

const PREFIX = 'PageWrapper';

const classes = {
    wrapper: `${PREFIX}-wrapper`
};

const Root = styled('div')(() => ({
    [`&.${classes.wrapper}`]: {
        display: "flex",
        flexDirection: "column",
    }
}));

function PageWrapper(props) {
    const { appBarHeight } = props;

    const theme = useTheme();
    return (
        <Root
            className={classes.wrapper}
            style={{
                maxHeight: `calc(100vh - ${
                    appBarHeight + parseInt(theme.spacing(1), 10)
                }px)`,
                overflow: "auto",
            }}
        >
            {props.children}
        </Root>
    );
}

export default PageWrapper;
