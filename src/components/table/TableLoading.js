/**
 * @author aramsey
 *
 * A component for showing a loading skeleton for a table.
 * The skeleton will be text boxes in the shape of however many rows
 * and columns.
 */
import React from "react";

import { styled } from '@mui/material/styles';

import buildID from "components/utils/DebugIDUtil";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { Skeleton } from "@mui/material";

import ids from "../utils/ids";

const PREFIX = 'TableLoading';

const classes = {
    skeleton: `${PREFIX}-skeleton`
};

const StyledTableBody = styled(TableBody)((
    {
        theme
    }
) => ({
    [`& .${classes.skeleton}`]: {
        backgroundColor: theme.palette.lightGray,
    }
}));

function TableLoading(props) {
    const { numColumns, numRows, baseId } = props;

    const arrayRows = [...Array(numRows)];
    const arrayColumns = [...Array(numColumns)];

    return (
        <StyledTableBody id={buildID(baseId, ids.LOADING_SKELETON)}>
            {arrayRows.map((element, rowIndex) => (
                <TableRow key={rowIndex}>
                    {arrayColumns.map((element, colIndex) => (
                        <TableCell key={colIndex}>
                            <Skeleton
                                variant="text"
                                classes={{ text: classes.skeleton }}
                            />
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </StyledTableBody>
    );
}

export default TableLoading;
