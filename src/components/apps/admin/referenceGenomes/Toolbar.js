/**
 * @author sriram
 *
 * A toolbar for admin Reference Genome Listing
 *
 */

import React from "react";
import { styled } from '@mui/material/styles';
import { useTranslation } from "i18n";

import ids from "./ids";
import GlobalFilter from "./GlobalFilter";

import buildID from "components/utils/DebugIDUtil";

import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const PREFIX = 'TableToolbar';

const classes = {
    root: `${PREFIX}-root`,
    toolbarItems: `${PREFIX}-toolbarItems`
};

const StyledToolbar = styled(Toolbar)((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },

    [`& .${classes.toolbarItems}`]: {
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(0.5),
        },
        [theme.breakpoints.up("sm")]: {
            margin: theme.spacing(1),
        },
    }
}));

const useToolbarStyles = makeStyles((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },

    [`& .${classes.toolbarItems}`]: {
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(0.5),
        },
        [theme.breakpoints.up("sm")]: {
            margin: theme.spacing(1),
        },
    }
}));

const TableToolbar = (props) => {
    const { baseId } = props;
    const { t } = useTranslation("referenceGenomes");
    const classes = useToolbarStyles();
    const {
        preGlobalFilteredRows,
        setGlobalFilter,
        globalFilter,
        onAddClicked,
    } = props;
    const toolbarId = buildID(baseId, ids.TOOLBAR);
    return (
        <StyledToolbar className={classes.root}>
            <Button
                id={buildID(toolbarId, ids.ADD_BUTTON)}
                variant="outlined"
                color="primary"
                startIcon={<AddIcon />}
                onClick={onAddClicked}
            >
                {t("add")}
            </Button>
            <GlobalFilter
                baseId={toolbarId}
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
        </StyledToolbar>
    );
};
export default TableToolbar;
