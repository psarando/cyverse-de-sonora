/**
 * @author aramsey
 *
 * A commonly used button or icon button that displays a red trash can icon
 */
import React from "react";

import buildID from "components/utils/DebugIDUtil";
import { Delete } from "@mui/icons-material";
import { Button, IconButton, useTheme } from "@mui/material";
import PropTypes from "prop-types";

import ids from "./ids";
import { useTranslation } from "../../i18n";

function DeleteButton(props) {
    const {
        baseId,
        ariaLabel,
        component = "Button",
        children,
        ...rest
    } = props;
    const { t } = useTranslation("common");
    const theme = useTheme();

    const isButton = component === "Button";
    const Component = isButton ? Button : IconButton;
    const showStartIcon = isButton && children;
    const showChildIcon = !isButton || !showStartIcon;

    return (
        <Component
            id={buildID(baseId, ids.BUTTONS.DELETE)}
            aria-label={ariaLabel || t("delete")}
            sx={{
                color: theme.palette.error.main,
            }}
            {...(showStartIcon && { startIcon: <Delete /> })}
            {...rest}
        >
            {showChildIcon && <Delete />}
            {children}
        </Component>
    );
}

DeleteButton.propTypes = {
    baseId: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    component: PropTypes.oneOf(["Button", "IconButton"]),
};

export default DeleteButton;
