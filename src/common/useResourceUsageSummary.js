/**
 * A hook to fetch a user's subscription and resource usage summary,
 * along with convenience flags and parsed values.
 *
 * @author psarando
 */
import { useQuery } from "react-query";

import constants from "../constants";
import { useTranslation } from "i18n";
import { useConfig } from "contexts/config";
import { useUserProfile } from "contexts/userProfile";
import {
    getResourceUsageSummary,
    RESOURCE_USAGE_QUERY_KEY,
} from "serviceFacades/dashboard";

import { getUserQuota } from "./resourceUsage";

function useResourceUsageSummary(showErrorAnnouncer) {
    const { t } = useTranslation("common");
    const [userProfile] = useUserProfile();
    const [config] = useConfig();
    const enforceSubscriptions = config?.subscriptions?.enforce;

    const {
        isFetching: isFetchingUsageSummary,
        data: resourceUsageSummary,
        error: resourceUsageError,
    } = useQuery({
        queryKey: [RESOURCE_USAGE_QUERY_KEY],
        queryFn: getResourceUsageSummary,
        enabled: enforceSubscriptions && !!userProfile?.id,
        onError: (e) => {
            showErrorAnnouncer(t("usageSummaryError"), e);
        },
    });

    const dataUsage = resourceUsageSummary?.data_usage?.total || 0;
    const computeUsage = resourceUsageSummary?.cpu_usage?.total || 0;
    const subscription = resourceUsageSummary?.subscription;

    const storageQuota = getUserQuota(
        constants.DATA_STORAGE_RESOURCE_NAME,
        subscription
    );
    const computeQuota = getUserQuota(
        constants.CPU_HOURS_RESOURCE_NAME,
        subscription
    );

    const planName = subscription?.plan?.name || constants.PLAN_NAME_BASIC;
    const hasAddons = subscription?.addons?.length > 0;
    const hasDataAddon = !!subscription?.addons?.find(
        ({ addon }) =>
            addon.resource_type.name === constants.DATA_STORAGE_RESOURCE_NAME
    );
    const hasCPUAddon = !!subscription?.addons?.find(
        ({ addon }) =>
            addon.resource_type.name === constants.CPU_HOURS_RESOURCE_NAME
    );

    const planCanShare =
        !enforceSubscriptions ||
        planName !== constants.PLAN_NAME_BASIC ||
        hasAddons;

    const dataLimitExceeded = dataUsage >= storageQuota;
    const computeLimitExceeded = computeUsage >= computeQuota;

    return {
        isFetchingUsageSummary,
        resourceUsageSummary,
        resourceUsageError,
        planName,
        planCanShare,
        dataUsage,
        storageQuota,
        dataLimitExceeded,
        computeLimitExceeded,
        hasAddons,
        hasDataAddon,
        hasCPUAddon,
    };
}

export default useResourceUsageSummary;
