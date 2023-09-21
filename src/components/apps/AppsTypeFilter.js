import React from "react";
import { useTranslation } from "i18n";
import ids from "./ids";
import appType from "components/models/AppType";
import buildID from "components/utils/DebugIDUtil";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

function getFilters() {
    return Object.values(appType);
}

export default function AppsTypeFilter(props) {
    const { baseId, filter, handleFilterChange, classes, disabled } = props;
    const { t } = useTranslation("apps");

    return (
        <Autocomplete
            id={buildID(baseId, ids.APPS_FILTER)}
            disabled={disabled}
            value={filter}
            options={getFilters()}
            size="small"
            onChange={(event, newValue) => {
                handleFilterChange(newValue);
            }}
            getOptionLabel={(option) => option.display}
            isOptionEqualToValue={(option, value) =>
                option.value === value.value
            }
            className={classes.filter}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={t("filterLbl")}
                    variant="outlined"
                />
            )}
        />
    );
}
export { getFilters };
