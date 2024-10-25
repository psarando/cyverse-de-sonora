import React from "react";

import ids from "components/apps/editor/ids";
import VersionsOrderingForm from "components/apps/editor/VersionsOrderingForm";

export default { title: "Apps / Editor" };

export const VersionsOrdering = () => {
    return (
        <VersionsOrderingForm
            baseId={ids.APP_VERSION}
            versions={[
                { id: 2, version: "v2" },
                { id: 1, version: "v1" },
                { id: 0, version: "latest" },
            ]}
        />
    );
};
