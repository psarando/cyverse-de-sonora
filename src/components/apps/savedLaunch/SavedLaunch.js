/**
 *
 * @author sriram
 *
 */
import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import PublicIcon from "@mui/icons-material/Public";
import LockIcon from "@mui/icons-material/Lock";
const PREFIX = 'SavedLaunch';

const classes = {
    chip: `${PREFIX}-chip`
};

const StyledChip
 = styled(Chip
)((
    {
        theme
    }
) => ({
    [`& .${classes.chip}`]: {
        margin: theme.spacing(1),
    }
}));

const SavedLaunch = React.forwardRef((props, ref) => {
    const {
        id,
        handleClick,
        handleDelete,
        isDefault,
        isPublic,
        classes,
        href,
        ...custom
    } = props;
    const color = isDefault || isPublic ? "primary" : "default";
    const icon = isPublic ? <PublicIcon /> : <LockIcon />;
    return (
        <Chip
            key={id}
            id={id}
            icon={icon}
            href={href}
            ref={ref}
            color={color}
            onDelete={handleDelete}
            onClick={handleClick}
            className={classes.chip}
            variant="outlined"
            {...custom}
        />
    );
});

SavedLaunch.defaultProps = {
    clickable: true,
};

SavedLaunch.propTypes = {
    id: PropTypes.string.isRequired,
    clickable: PropTypes.bool,
    label: PropTypes.string.isRequired,
    handleDelete: PropTypes.func,
    handleClick: PropTypes.func,
    isDefault: PropTypes.bool,
    isPublic: PropTypes.bool,
    classes: PropTypes.object,
};

export default (SavedLaunch);
