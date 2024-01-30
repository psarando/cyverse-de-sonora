/**
 *
 * @author sriram
 *
 */
import React from "react";
import { styled } from '@mui/material/styles';
import { useTranslation } from "i18n";
import buildID from "components/utils/DebugIDUtil";

import ids from "../ids";

import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import ListSavedLaunches from "./SavedLaunchListing";

const PREFIX = 'SavedLaunchDialog';

const classes = {
    closeButton: `${PREFIX}-closeButton`
};

const StyledDialog = styled(Dialog)((
    {
        theme
    }
) => ({
    [`& .${classes.closeButton}`]: {
        float: "right",
    }
}));

export default function SavedLaunchDialog(props) {
    const { baseDebugId, appName, appId, systemId, open, onClose } = props;
    const { t } = useTranslation("apps");



    return (
        <StyledDialog open={open}>
            <DialogTitle>
                {t("savedLaunch")} - {appName}
                <IconButton
                    className={classes.closeButton}
                    aria-label={t("cancelLabel")}
                    onClick={onClose}
                    size="small"
                    edge="end"
                    id={buildID(baseDebugId, ids.CLOSE_BTN)}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent id={buildID(baseDebugId, ids.DIALOG)}>
                <ListSavedLaunches
                    appId={appId}
                    systemId={systemId}
                    baseDebugId={baseDebugId}
                />
            </DialogContent>
        </StyledDialog>
    );
}
