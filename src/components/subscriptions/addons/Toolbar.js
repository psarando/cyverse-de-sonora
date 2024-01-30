import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Button, Toolbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Delete } from "@mui/icons-material";

import { useTranslation } from "i18n";
import ids from "../ids";
import buildID from "components/utils/DebugIDUtil";
import EditAddonDialog from "./edit/EditAddon";

const PREFIX = 'AddonsToolbar';

const classes = {
    toolbarItems: `${PREFIX}-toolbarItems`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.toolbarItems}`]: {
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(0.5),
        },
        [theme.breakpoints.up("sm")]: {
            margin: theme.spacing(1),
        },
    }
}));

function AddonsToolbar(props) {
    const { baseId, isAdminView, multipleSelected, onDeleteSelected } = props;
    const { t } = useTranslation("subscriptions");
    const toolbarId = buildID(baseId, ids.TOOLBAR);
    const [addDialogOpen, setAddDialogOpen] = useState(false);


    return (
        (<Root>
            {isAdminView && (
                <Toolbar variant="dense">
                    <Button
                        id={buildID(toolbarId, ids.ADD_BUTTON)}
                        variant="outlined"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => setAddDialogOpen(true)}
                    >
                        {t("add")}
                    </Button>
                    <EditAddonDialog
                        open={addDialogOpen}
                        onClose={() => setAddDialogOpen(false)}
                        parentId={baseId}
                    />
                    {multipleSelected && (
                        <Button
                            id={buildID(toolbarId, ids.DELETE_BUTTON)}
                            className={classes.toolbarItems}
                            variant="outlined"
                            color="primary"
                            startIcon={<Delete />}
                            onClick={onDeleteSelected}
                        >
                            {t("deleteAddon")}
                        </Button>
                    )}
                </Toolbar>
            )}
        </Root>)
    );
}
export default AddonsToolbar;
