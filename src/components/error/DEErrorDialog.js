/**
 * @author sriram
 *  Wraps ErrorHandler in a Dialog
 *
 **/

import React from "react";
import { styled } from '@mui/material/styles';
import { useTranslation } from "i18n";
import PropTypes from "prop-types";

import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ErrorHandler from "./ErrorHandler";

const PREFIX = 'DEErrorDialog';

const classes = {
    closeButton: `${PREFIX}-closeButton`
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
        color: theme.palette.error.main,
        padding: theme.spacing(1),
    }
}));

const DEErrorDialog = ({
    baseId,
    handleClose,
    errorHandler,
    errorObject,
    open,
}) => {
    const { t } = useTranslation("util");


    const ErrorHandlerComponent = errorHandler || ErrorHandler;

    return (
        <StyledDialog open={open} onClose={handleClose} scroll="body">
            <DialogTitle>
                <IconButton
                    aria-label={t("close")}
                    className={classes.closeButton}
                    onClick={handleClose}
                    size="large"
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <ErrorHandlerComponent
                    errorObject={errorObject}
                    baseId={baseId}
                />
            </DialogContent>
        </StyledDialog>
    );
};

DEErrorDialog.propTypes = {
    baseId: PropTypes.string,
    handleClose: PropTypes.func.isRequired,
    errorHandler: PropTypes.elementType,
    errorObject: PropTypes.object,
    open: PropTypes.bool.isRequired,
};

export default DEErrorDialog;
