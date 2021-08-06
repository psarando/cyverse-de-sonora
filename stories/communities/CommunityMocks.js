import { ipcdevUserInfo, userInfoResp } from "../UserInfoMocks";

export const devCommunity = {
    description: "Testing notifications",
    name: "Dev Test Community",
    type: "group",
    member: false,
    extension: "Dev Test Community",
    id: "4b4795cc99da45f188172a6e7f425644",
    display_extension: "Dev Test Community",
    display_name: "iplant:de:qa:communities:Dev Test Community",
    privileges: ["optin", "read"],
    id_index: "13207",
};

export const myCommunityList = {
    groups: [
        { ...devCommunity },
        {
            description: "The best, obviously",
            name: "Best Community",
            type: "group",
            member: true,
            extension: "Best Community",
            id: "4509683a8b964019b4b8c3c5b80ada3c",
            display_extension: "Best Community",
            display_name: "iplant:de:qa:communities:Best Community",
            privileges: ["admin", "read", "optout"],
            id_index: "11920",
        },
        {
            description: "Dev Community",
            name: "DevCommunity",
            type: "group",
            member: false,
            extension: "DevCommunity",
            id: "d4083572ab76436c87736f1b301d17c0",
            display_extension: "DevCommunity",
            display_name: "iplant:de:qa:communities:DevCommunity",
            privileges: ["read", "optout"],
            id_index: "11913",
        },
        {
            description: "App Community",
            name: "Last Wednesday Society",
            type: "group",
            member: false,
            extension: "Last Wednesday Society",
            id: "f5e01bb0ba26449c8a25032d95e92c29",
            display_extension: "Last Wednesday Society",
            display_name: "iplant:de:qa:communities:Last Wednesday Society",
            privileges: ["read", "optout"],
            id_index: "11918",
        },
        {
            description: "Metal!",
            name: "Metalheads",
            type: "group",
            member: true,
            extension: "Metalheads",
            id: "fccdbd76e69843538eb230ec9a101e1d",
            display_extension: "Metalheads",
            display_name: "iplant:de:qa:communities:Metalheads",
            privileges: ["optin", "read", "optout"],
            id_index: "12131",
        },
        {
            name: "MoreTest",
            type: "group",
            member: true,
            extension: "MoreTest",
            id: "4b10d3804ce44a559b2acf4446d62d7b",
            display_extension: "MoreTest",
            display_name: "iplant:de:qa:communities:MoreTest",
            privileges: ["optin", "admin", "read"],
            id_index: "13633",
        },
        {
            description: "It's five o'clock somwhere",
            name: "Parrotheads",
            type: "group",
            member: true,
            extension: "Parrotheads",
            id: "51f3dfd0407e4359a11e9e01d86a715e",
            display_extension: "Parrotheads",
            display_name: "iplant:de:qa:communities:Parrotheads",
            privileges: ["optin", "read", "optout"],
            id_index: "12132",
        },
        {
            description: "Test App Community",
            name: "Rename Me",
            type: "group",
            member: false,
            extension: "Rename Me",
            id: "04146fb3e4344b9ebb0fd972def648a8",
            display_extension: "Rename Me",
            display_name: "iplant:de:qa:communities:Rename Me",
            privileges: ["read", "optout"],
            id_index: "11914",
        },
        {
            description:
                "Because I was unable to join any extant communities. :D",
            name: "Sarah",
            type: "group",
            member: true,
            extension: "Sarah",
            id: "0b2207b34d8d468e9099501b25e9d517",
            display_extension: "Sarah",
            display_name: "iplant:de:qa:communities:Sarah",
            privileges: ["optin", "read", "optout"],
            id_index: "12125",
        },
        {
            name: "TestCommunityApps",
            type: "group",
            member: false,
            extension: "TestCommunityApps",
            id: "a1f90925e74b471e80aa371a0b4f335c",
            display_extension: "TestCommunityApps",
            display_name: "iplant:de:qa:communities:TestCommunityApps",
            privileges: ["optin", "read"],
            id_index: "12764",
        },
        {
            description: "bb gasfdnfgbdsafdhsxcxfafg EWGRS GRWAG THAfre",
            name: "busta ",
            type: "group",
            member: false,
            extension: "busta ",
            id: "ae8128c7fb3f40fb8d3017b3d66f8f60",
            display_extension: "busta ",
            display_name: "iplant:de:qa:communities:busta ",
            privileges: ["optin", "read"],
            id_index: "12885",
        },
        {
            name: "reactcommunity",
            type: "group",
            member: false,
            extension: "reactcommunity",
            id: "6c2f130098704119a17fb53c57649818",
            display_extension: "reactcommunity",
            display_name: "iplant:de:qa:communities:reactcommunity",
            privileges: ["optin", "read"],
            id_index: "12765",
        },
        {
            description: "test",
            name: "test",
            type: "group",
            member: false,
            extension: "test",
            id: "03a73afaf1a64218a8df2234523b621b",
            display_extension: "test",
            display_name: "iplant:de:qa:communities:test",
            privileges: ["optin", "read"],
            id_index: "13575",
        },
        {
            description: "testDescription",
            name: "testName",
            type: "group",
            member: false,
            extension: "testName",
            id: "abf19937340e4611839f50bc81d880c2",
            display_extension: "testName",
            display_name: "iplant:de:qa:communities:testName",
            privileges: ["optin", "read"],
            id_index: "13583",
        },
        {
            name: "testy test",
            type: "group",
            member: true,
            extension: "testy test",
            id: "eedb5fac9a8c448fbf2585c1a84d10c6",
            display_extension: "testy test",
            display_name: "iplant:de:qa:communities:testy test",
            privileges: ["optin", "read", "optout"],
            id_index: "12758",
        },
    ],
};

export const communityAdmins = (includeSelf) => {
    let baseMembers = [userInfoResp.batman, userInfoResp.alfred];
    if (includeSelf) {
        baseMembers.push(ipcdevUserInfo.ipcdev);
    }
    return {
        members: baseMembers,
    };
};

export const communityAdminsInfo = (includeSelf) => {
    let baseResp = {
        batman: userInfoResp.batman,
        alfred: userInfoResp.alfred,
    };
    if (includeSelf) {
        baseResp = {
            ...baseResp,
            ipcdev: ipcdevUserInfo.ipcdev,
        };
    }
    return baseResp;
};

export const communityFollowers = {
    members: [userInfoResp.robin, userInfoResp.catwoman],
};

export const communityApps = {
    apps: [
        {
            integration_date: "2016-01-22T00:24:54.000Z",
            description: "16sblaster",
            deleted: false,
            pipeline_eligibility: { is_valid: true, reason: "" },
            is_favorite: true,
            integrator_name: "Ken Youensclark",
            beta: false,
            permission: "read",
            isBlessed: true,
            can_favor: true,
            disabled: false,
            can_rate: true,
            name: "16sblaster",
            limitChecks: { canRun: true, results: [] },
            system_id: "de",
            is_public: true,
            id: "13ad5f48-bfb4-11e5-a5df-4b1d67d0fef0",
            edited_date: "2017-02-07T20:15:30.000Z",
            step_count: 1,
            can_run: true,
            integrator_email: "kyclark@email.arizona.edu",
            app_type: "DE",
            rating: { average: 5, total: 1 },
        },
        {
            integration_date: "2013-05-24T21:44:49.000Z",
            description:
                "This App will add existing reference annotation information to newly assembled transcripts in GFF format.",
            deleted: false,
            pipeline_eligibility: { is_valid: true, reason: "" },
            is_favorite: true,
            integrator_name: "Roger Barthelson",
            beta: false,
            permission: "read",
            isBlessed: false,
            can_favor: true,
            disabled: false,
            can_rate: true,
            name: "Annotate transcripts",
            limitChecks: { canRun: true, results: [] },
            system_id: "de",
            is_public: true,
            id: "676846d4-854a-11e4-980d-7f0fcca75dbb",
            edited_date: "2013-05-24T20:56:03.000Z",
            step_count: 1,
            can_run: true,
            integrator_email: "rogerab@email.arizona.edu",
            app_type: "DE",
            wiki_url:
                "http://pods.iplantcollaborative.org/wiki/display/DEapps/Annotate+transcripts",
            rating: { average: 1, total: 1 },
        },
        {
            integration_date: "2018-04-26T18:22:58.000Z",
            description:
                "Outputs counts at each position of a genome marked in the BAM input file.",
            deleted: false,
            pipeline_eligibility: { is_valid: true, reason: "" },
            is_favorite: true,
            integrator_name: "Amanda Cooksey",
            beta: true,
            permission: "read",
            isBlessed: false,
            can_favor: true,
            disabled: false,
            can_rate: true,
            name: "Bedtools Genome Coverage-BAM-2.26",
            limitChecks: { canRun: true, results: [] },
            system_id: "de",
            is_public: true,
            id: "74f20dda-48ce-11e8-b15c-008cfa5ae621",
            edited_date: "2018-04-26T18:22:58.000Z",
            step_count: 1,
            can_run: true,
            integrator_email: "amcooksey@email.arizona.edu",
            app_type: "DE",
            rating: { average: 0, total: 0 },
        },
    ],
};

export const updateCommunityNameDescMock = {
    name: "Another Community",
    description: "some new desc",
    display_extension: "Another Community",
    display_name: "iplant:de:qa:communities:Another Community",
    id: "abf19937340e4611839f50bc81d880c3",
};
