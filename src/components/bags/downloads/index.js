import React from "react";

import { styled } from '@mui/material/styles';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    Typography,
} from "@mui/material";

import { Cancel as CancelIcon, Close } from "@mui/icons-material";

import buildID from "components/utils/DebugIDUtil";

import { useTranslation } from "i18n";

import { getHost } from "components/utils/getHost";
import constants from "components/bags/constants";

const PREFIX = 'DownloadLinksDialog';

const classes = {
    closeButton: `${PREFIX}-closeButton`,
    help: `${PREFIX}-help`,
    paper: `${PREFIX}-paper`
};

const StyledDialog = styled(Dialog)((
    {
        theme
    }
) => ({
    [`& .${classes.closeButton}`]: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
    },

    [`& .${classes.help}`]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    },

    [`& .${classes.paper}`]: {
        width: theme.spacing(60),
        height: theme.spacing(70),
    }
}));

const DownloadLinksDialog = ({
    paths = [],
    open = false,
    fullScreen = false,
    onClose = () => {},
}) => {

    const { t } = useTranslation(["bags", "common"]);
    const dialogID = buildID(constants.DOWNLOAD_BASEID, constants.DIALOG);

    const handleClose = (event) => {
        event.preventDefault();
        event.stopPropagation();

        onClose();
    };

    return (
        <StyledDialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            classes={{ paper: classes.paper }}
        >
            <DialogTitle>
                {t("downloadLinks")}

                <Typography
                    component="p"
                    variant="body1"
                    color="textSecondary"
                    classes={{ root: classes.help }}
                    id={buildID(dialogID, constants.TITLE, constants.HELP)}
                >
                    {t("downloadLinksDescription")}
                </Typography>

                <IconButton
                    onClick={handleClose}
                    className={classes.closeButton}
                    id={buildID(
                        dialogID,
                        constants.TITLE,
                        constants.CLOSE,
                        constants.button
                    )}
                    size="large"
                >
                    <Close />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <List dense={true}>
                    {paths.map((path, index) => {
                        const linkID = buildID(dialogID, constants.LINK, index);
                        return (
                            <ListItem id={linkID} key={linkID}>
                                <a
                                    download={path.substring(
                                        path.lastIndexOf("/") + 1
                                    )}
                                    href={`${getHost()}/api/download?path=${encodeURIComponent(
                                        path
                                    )}`}
                                >
                                    {path}
                                </a>
                            </ListItem>
                        );
                    })}
                </List>
            </DialogContent>

            <DialogActions>
                {fullScreen ? (
                    <IconButton
                        onClick={handleClose}
                        id={buildID(
                            dialogID,
                            constants.CANCEL,
                            constants.BUTTON
                        )}
                        size="large"
                    >
                        <CancelIcon />
                    </IconButton>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<CancelIcon />}
                        onClick={handleClose}
                        size="small"
                        id={buildID(
                            dialogID,
                            constants.CANCEL,
                            constants.BUTTON
                        )}
                    >
                        {t("close")}
                    </Button>
                )}
            </DialogActions>
        </StyledDialog>
    );
};

export default DownloadLinksDialog;
