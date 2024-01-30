/**
 *
 * A MUI accordion that allows for displaying and
 * hiding additional content when clicked.
 *
 */

import React, { useState } from "react";

import { styled } from '@mui/material/styles';

import ids from "./ids";

import buildID from "components/utils/DebugIDUtil";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import PropTypes from "prop-types";

const PREFIX = 'SimpleExpansionPanel';

const classes = {
    expansionDetails: `${PREFIX}-expansionDetails`,
    paramsViewSummary: `${PREFIX}-paramsViewSummary`,
    paramsViewsExpandIcon: `${PREFIX}-paramsViewsExpandIcon`
};

const StyledAccordion = styled(Accordion)((
    {
        theme
    }
) => ({
    [`& .${classes.expansionDetails}`]: {
        flexDirection: "column",
    },

    [`& .${classes.paramsViewSummary}`]: {
        color: theme.palette.info.contrastText,
        backgroundColor: theme.palette.info.main,
    },

    [`& .${classes.paramsViewsExpandIcon}`]: {
        color: theme.palette.info.contrastText,
    }
}));

function SimpleExpansionPanel(props) {
    const { header, parentId, defaultExpanded, children, hasErrors } = props;
    const [expanded, setExpanded] = useState(defaultExpanded);


    const handleChange = (event, isExpanded) => {
        setExpanded(!!(isExpanded || hasErrors));
    };

    return (
        <StyledAccordion onChange={handleChange} expanded={expanded}>
            <AccordionSummary
                expandIcon={
                    <ExpandMore
                        id={buildID(parentId, ids.BUTTONS.EXPAND)}
                        className={classes.paramsViewsExpandIcon}
                    />
                }
                className={classes.paramsViewSummary}
            >
                <Typography variant="body1">{header}</Typography>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.expansionDetails }}>
                {children}
            </AccordionDetails>
        </StyledAccordion>
    );
}

SimpleExpansionPanel.defaultProps = {
    defaultExpanded: true,
};

SimpleExpansionPanel.propTypes = {
    header: PropTypes.any.isRequired,
    parentId: PropTypes.string.isRequired,
    defaultExpanded: PropTypes.bool,
    hasErrors: PropTypes.bool,
    children: PropTypes.any.isRequired,
};

export default SimpleExpansionPanel;
