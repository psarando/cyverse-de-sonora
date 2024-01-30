/**
 * @author psarando
 *
 * A Form Field placeholder that can display as a loading skeleton while values
 * are fetched from backend services. The loading skeleton can still display
 * helperText and validation error messages, such as a `Required` validation
 * error message if the form is submitted before values are loaded.
 */
import React from "react";

import { styled } from '@mui/material/styles';

import buildDebugId from "../utils/DebugIDUtil";
import ids from "../utils/ids";

import getFormError from "./getFormError";

import { FormControl, InputLabel, FormHelperText } from "@mui/material";
import { Skeleton } from "@mui/material";

const PREFIX = 'FormFieldLoading';

const classes = {
    skeleton: `${PREFIX}-skeleton`
};

const StyledFormControl = styled(FormControl)((
    {
        theme
    }
) => ({
    [`& .${classes.skeleton}`]: {
        height: theme.spacing(6),
    }
}));

const FormFieldLoading = ({
    id,
    field: { name },
    label,
    helperText,
    required,
    form: { touched, errors },
    ...props
}) => {

    const errorMsg = getFormError(name, touched, errors);
    const loadingFieldID = buildDebugId(id, ids.LOADING_SKELETON);
    const helperTextID = buildDebugId(loadingFieldID, ids.HELPER_TEXT);

    return (
        <StyledFormControl variant="standard" fullWidth error={!!errorMsg}>
            <InputLabel htmlFor={loadingFieldID} required={required}>
                {label}
            </InputLabel>
            <Skeleton
                id={loadingFieldID}
                aria-describedby={helperTextID}
                variant="text"
                className={classes.skeleton}
                {...props}
            />
            <FormHelperText id={helperTextID}>
                {errorMsg || helperText}
            </FormHelperText>
        </StyledFormControl>
    );
};

export default FormFieldLoading;
