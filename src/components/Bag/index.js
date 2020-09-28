import React, { useState, useEffect } from "react";

import {
    Badge,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItemSecondaryAction,
    makeStyles,
    Button,
    useMediaQuery,
    Tabs,
    Tab,
    Typography,
} from "@material-ui/core";
import {
    Delete,
    GetApp,
    People,
    Clear,
    Close,
    ShoppingBasket as ShoppingBasketIcon,
} from "@material-ui/icons";

import * as facade from "../../serviceFacades/bags";
import { Skeleton } from "@material-ui/lab";

import {
    createNewBagItem,
    FILE_TYPE,
    FOLDER_TYPE,
    ANALYSIS_TYPE,
    APP_TYPE,
} from "./classes";
import { useTranslation } from "i18n";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    help: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    },
    paper: {
        width: theme.spacing(60),
        height: theme.spacing(70),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(2),
        width: theme.spacing(20),

        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    actionContainer: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "flex-end",
    },
}));

const BagSkeleton = () => (
    <Skeleton variant="rect" animation="wave" height={100} width="100%" />
);

const BagTab = ({ id, value, index, bagItems }) => {
    const classes = useStyles();
    const { t } = useTranslation(["bags", "common"]);
    const [tabItems, setTabItems] = useState([]);

    useEffect(() => {
        setTabItems(bagItems);
    }, [setTabItems, bagItems]);

    return (
        <div hidden={value !== index} id={id}>
            <List classes={{ root: classes.list }}>
                {bagItems.map((tabItem, tabIndex) => {
                    return (
                        <ListItem key={tabIndex}>
                            <ListItemAvatar>
                                <Avatar>{tabItem.icon(t)}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={tabItem.label} />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label={t("delete")}
                                    onClick={() => {
                                        let newItems = [...tabItems];
                                        newItems.splice(tabIndex, 1);
                                        setTabItems(newItems);
                                    }}
                                >
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
};

export const BagUI = ({ items, isLoading }) => {
    const { t } = useTranslation(["bags", "common"]);
    const [tabValue, setTabValue] = useState(0);

    const [shareableItems, setShareableItems] = useState([]);
    const [downloadableItems, setDownloadableItems] = useState([]);

    useEffect(() => {
        const bagItems = items.map((item) => createNewBagItem(item));
        setShareableItems(bagItems.filter((item) => item.shareable));
        setDownloadableItems(bagItems.filter((item) => item.downloadable));
    }, [items, isLoading]);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            {isLoading ? (
                <BagSkeleton />
            ) : (
                <>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label={t("download")} />
                        <Tab label={t("share")}></Tab>
                    </Tabs>

                    <BagTab
                        value={tabValue}
                        index={0}
                        bagItems={downloadableItems}
                        translationKey="download"
                    />

                    <BagTab
                        value={tabValue}
                        index={1}
                        bagItems={shareableItems}
                        translationKey="share"
                    />
                </>
            )}
        </>
    );
};

export default ({ menuIconClass }) => {
    const theme = useTheme();
    const classes = useStyles();
    const { t } = useTranslation(["bags", "common"]);
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    if (!menuIconClass) {
        menuIconClass = classes.menuIcon;
    }

    const { isLoading, isError: hasErrored, data, error } = facade.useBag();

    const [badgeCount, setBadgeCount] = useState(0);
    const [bagItems, setBagItems] = useState([]);

    if (hasErrored) {
        console.log(error.message);
    }

    useEffect(() => {
        setBagItems(data?.items || []);
    }, [data, setBagItems]);

    useEffect(() => {
        setBadgeCount(bagItems.length);
    }, [bagItems, setBadgeCount]);

    const [bagDlgOpen, setBagDlgOpen] = useState(false);

    const handleMenuClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setBagDlgOpen(!bagDlgOpen);
    };

    const handleClose = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setBagDlgOpen(false);
    };

    const clearAll = facade.useBagRemoveItems();

    return (
        <>
            <IconButton className={menuIconClass} onClick={handleMenuClick}>
                <Badge
                    badgeContent={badgeCount}
                    invisible={badgeCount < 1}
                    color="error"
                >
                    <ShoppingBasketIcon />
                </Badge>
            </IconButton>

            <Dialog
                fullScreen={fullScreen}
                open={bagDlgOpen}
                onClose={handleClose}
                classes={{ paper: classes.paper }}
            >
                <DialogTitle>
                    {t("yourItemBag")}

                    <Typography
                        component="p"
                        variant="body1"
                        color="textSecondary"
                        classes={{ root: classes.help }}
                    >
                        {t("bagHelp")}
                    </Typography>

                    <IconButton
                        onClick={handleClose}
                        className={classes.closeButton}
                    >
                        <Close />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers>
                    <BagUI isLoading={isLoading} items={bagItems} />
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<Clear />}
                        onClick={() => clearAll()}
                    >
                        {t("clearBag")}
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<GetApp />}
                        onClick={() => {}}
                    >
                        {t("download")}
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<People />}
                        onClick={() => {}}
                    >
                        {t("share")}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export { FILE_TYPE, FOLDER_TYPE, ANALYSIS_TYPE, APP_TYPE };
