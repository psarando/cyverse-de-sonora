import React, { useEffect } from "react";

import { styled } from '@mui/material/styles';

import { useRouter } from "next/router";
import { useTranslation } from "i18n";

import buildID from "components/utils/DebugIDUtil";
import ids from "./ids";
import { setLocalStorage } from "components/utils/localStorage";
import constants from "../../constants";
import NavigationConstants from "common/NavigationConstants";

import Pagination from "@mui/material/Pagination";
import {
    Button,
    ClickAwayListener,
    Grid,
    Grow,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Tooltip,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PREFIX = 'DEPagination';

const classes = {
    paper: `${PREFIX}-paper`,
    paginationItems: `${PREFIX}-paginationItems`,
    buttonPadding: `${PREFIX}-buttonPadding`
};

const StyledPaper = styled(Paper)((
    {
        theme
    }
) => ({
    [`& .${classes.paper}`]: {
        flexShrink: 0,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

    [`& .${classes.paginationItems}`]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        color: theme.palette.info,
    },

    [`& .${classes.buttonPadding}`]: {
        paddingTop: theme.spacing(1.5),
    }
}));

const options = [100, 200, 500];

function savePageSizeToLocalStorage(type, selectedPageSize) {
    let pageSizeKey = null;
    if (type === NavigationConstants.DATA) {
        pageSizeKey = constants.LOCAL_STORAGE.DATA.PAGE_SIZE;
    } else if (type === NavigationConstants.APPS) {
        pageSizeKey = constants.LOCAL_STORAGE.APPS.PAGE_SIZE;
    } else if (type === NavigationConstants.ANALYSES) {
        pageSizeKey = constants.LOCAL_STORAGE.ANALYSES.PAGE_SIZE;
    } else if (type === NavigationConstants.TOOLS) {
        pageSizeKey = constants.LOCAL_STORAGE.TOOLS.PAGE_SIZE;
    }
    if (pageSizeKey) {
        setLocalStorage(pageSizeKey, selectedPageSize);
    }
}

function ItemsPerPage(props) {
    const { onPageSizeChange, selectedPageSize, baseId } = props;

    const { t } = useTranslation("util");


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const router = useRouter();
    const type = router?.pathname
        ? router.pathname.split(constants.PATH_SEPARATOR)[1]
        : NavigationConstants.DASHBOARD;

    useEffect(() => {
        savePageSizeToLocalStorage(type, selectedPageSize);
    }, [type, selectedPageSize]);

    const handleMenuItemClick = (event, index) => {
        onPageSizeChange(options[index]);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const menuId = buildID(baseId, ids.PAGE_SIZE_MENU);
    return <>
        <Tooltip title={t("selectPageSize")}>
            <Button
                className={classes.buttonPadding}
                color="primary"
                size="small"
                ref={anchorRef}
                aria-controls={open ? menuId : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label={t("selectPageSize")}
                aria-haspopup="menu"
                onClick={handleToggle}
            >
                {selectedPageSize} <ArrowDropDownIcon />
            </Button>
        </Tooltip>
        <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            placement === "bottom"
                                ? "center top"
                                : "center bottom",
                    }}
                >
                    <StyledPaper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id={menuId}>
                                {options.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        selected={
                                            option === selectedPageSize
                                        }
                                        onClick={(event) =>
                                            handleMenuItemClick(
                                                event,
                                                index
                                            )
                                        }
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </StyledPaper>
                </Grow>
            )}
        </Popper>
    </>;
}

function DEPagination(props) {

    const theme = useTheme();
    const { onChange, page, totalPages, onPageSizeChange, pageSize, baseId } =
        props;
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Paper className={classes.paper}>
            <Grid container justifyContent="center">
                <Grid item>
                    <Pagination
                        id={buildID(baseId, ids.PAGINATION_TOOLBAR)}
                        size={matches ? "small" : "medium"}
                        className={classes.paginationItems}
                        count={totalPages}
                        variant="outlined"
                        onChange={onChange}
                        page={page}
                    />
                </Grid>
                <Grid item>
                    <ItemsPerPage
                        onPageSizeChange={onPageSizeChange}
                        selectedPageSize={pageSize}
                        baseId={baseId}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default DEPagination;
