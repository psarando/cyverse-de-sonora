/**
 *  @author sriram
 *
 **/

import React, { Component } from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import numeral from "numeral";
import Rating from "@mui/material/Rating";

import IconButton from "@mui/material/IconButton";
import { Tooltip, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const PREFIX = 'Rate';

const classes = {
    rating: `${PREFIX}-rating`,
    total: `${PREFIX}-total`,
    delete: `${PREFIX}-delete`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.rating}`]: {
        float: "left",
        marginTop: theme.spacing(0.15),
    },

    [`& .${classes.total}`]: {
        marginTop: theme.spacing(0.05),
    },

    [`& .${classes.delete}`]: {
        marginTop: theme.spacing(0.15),
    }
}));

class Rate extends Component {
    render() {
        const { name, value, readOnly, total, onChange, onDelete, } =
            this.props;
        const totalString = numeral(total).format("0a");
        return (
            <Root>
                <div className={classes.rating}>
                    <Rating
                        name={name}
                        value={value}
                        readOnly={readOnly}
                        onChange={(event, newValue) => {
                            event.stopPropagation();
                            onChange(event, newValue);
                        }}
                        precision={0.5}
                        size="small"
                    />
                </div>
                <div className={classes.total}>
                    {total > 0 && (
                        <Typography component="span" variant="caption">
                            ({totalString})
                        </Typography>
                    )}
                    {onDelete && (
                        <span className={classes.delete}>
                            <Tooltip title="Delete Rating">
                                <IconButton onClick={onDelete} size="small">
                                    <DeleteIcon
                                        fontSize="small"
                                        color="error"
                                    />
                                </IconButton>
                            </Tooltip>
                        </span>
                    )}
                </div>
            </Root>
        );
    }
}

Rate.defaultProps = {
    value: 0,
    readOnly: false,
    total: 0,
};

Rate.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    readOnly: PropTypes.bool,
    total: PropTypes.number,
    onChange: PropTypes.func,
};

export default (Rate);
