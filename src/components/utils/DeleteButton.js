/**
 * @author aramsey
 *
 * A commonly used button or icon button that displays a red trash can icon
 */
import React from "react";

import { styled } from '@mui/material/styles';

import buildID from "components/utils/DebugIDUtil";
import { Delete } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import PropTypes from "prop-types";

import ids from "./ids";
import { useTranslation } from "../../i18n";

const PREFIX = 'DeleteButton';

const classes = {
    deleteBtn: `${PREFIX}-deleteBtn`
};

const StyledComponent = styled(Component)((
    {
        theme
    }
) => ({
    [`& .${classes.deleteBtn}`]: {
        color: theme.palette.error.main,
    }
}));

function DeleteButton(props) {
    const {
        baseId,
        ariaLabel,
        component = "Button",
        children,
        ...rest
    } = props;
    const { t } = useTranslation("common");



    const isButton = component === "Button";
    const Component = isButton ? Button : IconButton;
    const showStartIcon = isButton && children;
    const showChildIcon = !isButton || !showStartIcon;

    return (
        <StyledComponent
            id={buildID(baseId, ids.BUTTONS.DELETE)}
            aria-label={ariaLabel || t("delete")}
            className={isButton ? classes.deleteBtn : null}
            classes={!isButton ? { root: classes.deleteBtn } : null}
            {...(showStartIcon && { startIcon: <Delete /> })}
            {...rest}
        >
            {showChildIcon && <Delete />}
            {children}
        </StyledComponent>
    );
}

DeleteButton.propTypes = {
    baseId: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    component: PropTypes.oneOf(["Button", "IconButton"]),
};

export default DeleteButton;
