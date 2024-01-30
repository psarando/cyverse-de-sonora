/**
 * @author sriram
 *
 * A Filter filed for admin Reference Genome Listing
 *
 */
import React from "react";

import { styled } from '@mui/material/styles';

import { useTranslation } from "i18n";

import ids from "./ids";

import buildID from "components/utils/DebugIDUtil";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const PREFIX = 'GlobalFilter';

const classes = {
    search: `${PREFIX}-search`,
    searchIcon: `${PREFIX}-searchIcon`,
    inputRoot: `${PREFIX}-inputRoot`,
    inputInput: `${PREFIX}-inputInput`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.search}`]: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },

    [`& .${classes.searchIcon}`]: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    [`& .${classes.inputRoot}`]: {
        color: "inherit",
    },

    [`& .${classes.inputInput}`]: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200,
        },
    }
}));

const GlobalFilter = ({
    baseId,
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) => {

    const { t } = useTranslation("referenceGenomes");
    const count = preGlobalFilteredRows.length;

    // Global filter only works with pagination from the first page.
    // This may not be a problem for server side pagination when
    // only the current page is downloaded.

    return (
        <Root className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                id={buildID(baseId, ids.FILTER_FIELD)}
                value={globalFilter || ""}
                onChange={(e) => {
                    setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                }}
                placeholder={`${count} ${t("genomes")}`}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ "aria-label": t("search") }}
            />
        </Root>
    );
};

export default GlobalFilter;
