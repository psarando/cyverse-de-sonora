import React from "react";
import { styled } from '@mui/material/styles';
import { Highlight } from "react-highlighter-ts";
import PropTypes from "prop-types";
const PREFIX = 'Highlighter';

const classes = {
    highlightColor: `${PREFIX}-highlightColor`
};

const StyledHighlight = styled(Highlight)((
    {
        theme
    }
) => ({
    [`& .${classes.highlightColor}`]: {
        background: "#FF0",
    }
}));

function Highlighter(props) {
    let { search, children, } = props;
    return (
        <StyledHighlight matchClass={classes.highlightColor} search={search}>
            {children}
        </StyledHighlight>
    );
}

Highlighter.propTypes = {
    search: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
};

export default (Highlighter);
