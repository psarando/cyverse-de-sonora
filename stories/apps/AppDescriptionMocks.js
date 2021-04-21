export const FileInfoTypesMock = {
    info_types: [
        {
            id: "0900e992-3bbd-4f4b-8d2d-ed289ca4e4f1",
            name: "File",
            label: "Unspecified",
        },
        {
            id: "0e3343e3-c59a-44c4-b5ee-d4501ec3a898",
            name: "ReferenceGenome",
            label: "Reference Sequence and Annotations",
        },
        {
            id: "57eb7fb6-bdc0-42aa-b494-0483f9347815",
            name: "ReferenceSequence",
            label: "Reference Sequence Only",
        },
        {
            id: "68246ddf-8b1b-44c0-827f-88945cad8227",
            name: "ReferenceAnnotation",
            label: "Reference Annotation Only",
        },
        {
            id: "762e5a0a-afb2-420e-8456-f79c78a29051",
            name: "SequenceAlignment",
            label: "Sequence Alignment",
        },
        {
            id: "f65a8f23-3e46-4df4-80f9-387641c013a6",
            name: "MultipleSequenceAlignment",
            label: "Multiple Sequence Alignment",
        },
        {
            id: "4a56f043-c62f-4fe9-a11f-a9a7d18e370f",
            name: "BarcodeFile",
            label: "Barcode File",
        },
        {
            id: "dd178256-ce77-41b0-a785-7e955799a20d",
            name: "ExpressionData",
            label: "Expression Data",
        },
        {
            id: "13313a72-ea0a-49df-9105-af798165a482",
            name: "GenomicAnnotation",
            label: "Genomic Annotation",
        },
        {
            id: "d4089473-139e-4345-9ca9-addcfc4b887e",
            name: "BiologicalModel",
            label: "Biological Model",
        },
        {
            id: "1c59c759-9cd3-4036-b7b4-82e8da40d0c2",
            name: "NucleotideOrPeptideSequence",
            label: "Nucleotide or Peptide Sequence",
        },
        {
            id: "3b4fc426-290a-4f63-adb4-75a60a43b420",
            name: "Structure",
            label: "Structure",
        },
        {
            id: "a378ca30-28c9-4179-8381-ec098a89d12b",
            name: "TraitFile",
            label: "Trait File",
        },
        {
            id: "7bda7ef9-7b25-43da-93d3-a6c483fd24e4",
            name: "TreeFile",
            label: "Tree File",
        },
        {
            id: "f1a9ce39-b83d-4820-909e-583f76bc5ebe",
            name: "VariantData",
            label: "Variant Data",
        },
        {
            id: "f51baae3-4368-4814-bca0-78bad9906445",
            name: "Archive",
            label: "Archive",
        },
        {
            id: "57bd5ba7-c899-4d50-8676-a3cd56e68f8a",
            name: "Binary",
            label: "Binary",
        },
        {
            id: "3b07f544-86a6-459e-b46a-ba53e6a37f33",
            name: "TabularData",
            label: "Tabular Data",
        },
        {
            id: "d433bee7-bfde-4696-a2b8-eb2b92ac0e13",
            name: "GraphFile",
            label: "Graph File",
        },
        {
            id: "6270ab49-d6b6-4d8c-b15a-89657b4227a4",
            name: "PlainText",
            label: "Plain Text",
        },
        {
            id: "15696bc7-f712-43f3-9910-150b53272841",
            name: "StructuredText",
            label: "Structured Text",
        },
        {
            id: "212907c0-736e-4dbe-b6e7-5dc0431c275f",
            name: "ReconcileTaxa",
            label: "Reconciled Taxonomy Information",
        },
        {
            id: "d106c3f9-93b5-4146-aaf0-727a0e8d8a50",
            name: "Image",
            label: "Image",
        },
    ],
};

export const AppDescriptionMock = {
    id: "1778b1d6-5a83-11ea-9e38-008cfa5ae621",
    system_id: "de",
    name: "kitchen sink",
    description: "everything but deprecated params",
    edited_date: "2020-06-25T22:43:19.000Z",
    groups: [
        {
            id: "177a671a-5a83-11ea-9e38-008cfa5ae621",
            name: "Files/Folders",
            label: "Files/Folders",
            isVisible: true,
            parameters: [
                {
                    description: "not required, excluded if empty",
                    name: "",
                    type: "FileInput",
                    omit_if_blank: true,
                    validators: [],
                    label: "Input File Label",
                    id: "177aaf4a-5a83-11ea-9e38-008cfa5ae621",
                    file_parameters: {
                        format: "Unspecified",
                        file_info_type: "File",
                        is_implicit: true,
                        data_source: "file",
                        retain: false,
                    },
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
                {
                    description: "",
                    name: "-i",
                    type: "FileInput",
                    omit_if_blank: false,
                    validators: [],
                    label: "Default Input File",
                    id: "177b7e98-5a83-11ea-9e38-008cfa5ae621",
                    file_parameters: {
                        format: "Unspecified",
                        file_info_type: "TreeFile",
                        is_implicit: false,
                        data_source: "file",
                        retain: false,
                    },
                    order: 0,
                    isVisible: false,
                    defaultValue: {
                        path:
                            "/iplant/home/shared/iplantcollaborative/example_data/treeview/leaf-tree.nwk",
                    },
                    required: false,
                },
                {
                    description: "",
                    name: "",
                    type: "FolderInput",
                    omit_if_blank: true,
                    validators: [],
                    label: "Input Folder",
                    id: "177c4440-5a83-11ea-9e38-008cfa5ae621",
                    file_parameters: {
                        format: "Unspecified",
                        file_info_type: "File",
                        is_implicit: true,
                        data_source: "file",
                        retain: false,
                    },
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
                {
                    description: "",
                    name: "--input",
                    type: "MultiFileSelector",
                    omit_if_blank: true,
                    validators: [],
                    label: "Multiple Input Files",
                    id: "177cd7b6-5a83-11ea-9e38-008cfa5ae621",
                    file_parameters: {
                        format: "Unspecified",
                        file_info_type: "File",
                        is_implicit: false,
                        repeat_option_flag: true,
                        data_source: "file",
                        retain: false,
                    },
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
            ],
        },
        {
            id: "177d4ae8-5a83-11ea-9e38-008cfa5ae621",
            name: "Text/Numerical Input",
            label: "Text/Numerical Input",
            isVisible: true,
            parameters: [
                {
                    description: "",
                    name: "",
                    type: "Info",
                    omit_if_blank: false,
                    validators: [],
                    label:
                        "<h4>Info Text!</h4>\nDoes <b>HTML</b> display?\n:sparkles: `Markdown` **now** _supported_ :tada:",
                    id: "177d78f6-5a83-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
                {
                    description: "single line text",
                    name: "--text",
                    type: "Text",
                    omit_if_blank: false,
                    validators: [
                        {
                            type: "Regex",
                            params: ["[a-zA-Z]+"],
                        },
                        {
                            type: "CharacterLimit",
                            params: [10],
                        },
                    ],
                    label: "Single-line Text",
                    id: "8a4cf0fa-5a83-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: "defaultxt",
                    required: true,
                },
                {
                    description: "never to be seen",
                    name: "--hidden-text",
                    type: "Text",
                    omit_if_blank: true,
                    validators: [],
                    label: "Single-line Text hidden",
                    id: "a48bca4a-5a83-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: false,
                    defaultValue: "secret",
                    required: true,
                },
                {
                    description: "",
                    name: "",
                    type: "MultiLineText",
                    omit_if_blank: true,
                    validators: [],
                    label: "Multi-line Text",
                    id: "81301b9e-5a85-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
                {
                    description: "checked t/f",
                    name: "--checked true, --checked false",
                    type: "Flag",
                    omit_if_blank: false,
                    validators: [],
                    label: "Checkbox",
                    id: "813057d0-5a85-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: "true",
                    required: false,
                },
                {
                    description: "",
                    name: "--checked, --unchecked",
                    type: "Flag",
                    omit_if_blank: false,
                    validators: [],
                    label: "Checkbox args without values",
                    id: "931784bc-5a91-11ea-bde0-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: "true",
                    required: false,
                },
                {
                    description: "",
                    name: "--checked-only was checked, ",
                    type: "Flag",
                    omit_if_blank: false,
                    validators: [],
                    label: "Checkbox checked arg only",
                    id: "d022466c-5a91-11ea-bcab-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: "true",
                    required: false,
                },
                {
                    description: "",
                    name: ", --unchecked-only was unchecked",
                    type: "Flag",
                    omit_if_blank: false,
                    validators: [],
                    label: "Checkbox unchecked arg only",
                    id: "eddfb202-5a91-11ea-bcab-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: "false",
                    required: false,
                },
                {
                    description: "always on",
                    name: "--always on, ",
                    type: "Flag",
                    omit_if_blank: false,
                    validators: [],
                    label: "Checkbox hidden",
                    id: "98a8c686-5a85-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: false,
                    defaultValue: "true",
                    required: false,
                },
                {
                    description: "ENV VAR",
                    name: "NEW_ENV_VAR",
                    type: "EnvironmentVariable",
                    omit_if_blank: false,
                    validators: [],
                    label: "Environment Variable",
                    id: "58d5a140-5a86-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: "envvar",
                    required: true,
                },
                {
                    description: "",
                    name: "--int",
                    type: "Integer",
                    omit_if_blank: false,
                    validators: [
                        {
                            type: "IntRange",
                            params: [3, 7],
                        },
                        {
                            type: "IntAbove",
                            params: [1],
                        },
                        {
                            type: "IntBelow",
                            params: [10],
                        },
                    ],
                    label: "Integer with validations",
                    id: "58d5fa32-5a86-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: true,
                },
                {
                    description: "up to 11",
                    name: "--hiddeni",
                    type: "Integer",
                    omit_if_blank: true,
                    validators: [],
                    label: "Integer hidden",
                    id: "75f9e182-5a86-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: false,
                    defaultValue: "11",
                    required: true,
                },
                {
                    description: "456",
                    name: "-d",
                    type: "Double",
                    omit_if_blank: true,
                    validators: [
                        {
                            type: "DoubleAbove",
                            params: [0],
                        },
                        {
                            type: "DoubleBelow",
                            params: [11],
                        },
                        {
                            type: "DoubleRange",
                            params: [0.01, 10.9],
                        },
                    ],
                    label: "Decimal with validation",
                    id: "a54462d2-5a86-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: "1.23",
                    required: true,
                },
                {
                    description: "",
                    name: "-hiddend",
                    type: "Double",
                    omit_if_blank: false,
                    validators: [],
                    label: "Decimal hidden",
                    id: "babfa96e-5a86-11ea-9e38-008cfa5ae621",
                    order: 0,
                    isVisible: false,
                    defaultValue: "4.56",
                    required: false,
                },
            ],
        },
        {
            id: "d7679d4c-5a86-11ea-9e38-008cfa5ae621",
            name: "Lists",
            label: "Lists",
            isVisible: true,
            parameters: [
                {
                    description: "required list",
                    arguments: [
                        {
                            name: "--required-list",
                            isDefault: false,
                            id: "abbe3acc-5ce1-11ea-8af3-008cfa5ae621",
                            display: "Value 1",
                            value: "val1",
                        },
                        {
                            name: "--required-list",
                            isDefault: false,
                            id: "abbefbe2-5ce1-11ea-8af3-008cfa5ae621",
                            display: "Value 2",
                            value: "val2",
                        },
                        {
                            name: "--required-list",
                            isDefault: false,
                            id: "abc0c332-5ce1-11ea-8af3-008cfa5ae621",
                            display: "Value 3",
                            value: "val3",
                        },
                    ],
                    name: "",
                    type: "TextSelection",
                    omit_if_blank: false,
                    validators: [],
                    label: "Required Text List",
                    id: "abbde28e-5ce1-11ea-8af3-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: true,
                },
                {
                    description: "",
                    arguments: [
                        {
                            name: "--optional-list",
                            isDefault: false,
                            id: "e16d6f58-5ce1-11ea-8af3-008cfa5ae621",
                            display: "Value 4",
                            value: "val4",
                        },
                        {
                            name: "--optional-list",
                            isDefault: false,
                            id: "e16d879a-5ce1-11ea-8af3-008cfa5ae621",
                            display: "Value 5",
                            value: "val5",
                        },
                        {
                            name: "--optional-list",
                            isDefault: false,
                            id: "e16d9da2-5ce1-11ea-8af3-008cfa5ae621",
                            display: "Value 6",
                            value: "val6",
                        },
                    ],
                    name: "",
                    type: "TextSelection",
                    omit_if_blank: false,
                    validators: [],
                    label: "Optional List",
                    id: "e16d4ad2-5ce1-11ea-8af3-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
                {
                    description: "",
                    arguments: [
                        {
                            name: "--list-always",
                            isDefault: true,
                            id: "072d632e-5ce2-11ea-8af3-008cfa5ae621",
                            display: "only option",
                            value: "on",
                        },
                    ],
                    name: "",
                    type: "TextSelection",
                    omit_if_blank: false,
                    validators: [],
                    label: "Forced Option List",
                    id: "072d3f52-5ce2-11ea-8af3-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: {
                        id: "072d632e-5ce2-11ea-8af3-008cfa5ae621",
                        name: "--list-always",
                        value: "on",
                        display: "only option",
                        isDefault: true,
                    },
                    required: true,
                },
                {
                    description: "",
                    arguments: [
                        {
                            name: "--int-list",
                            isDefault: false,
                            id: "e9dde8f6-5ce2-11ea-aa6d-008cfa5ae621",
                            display: "1",
                            value: "Value 1",
                        },
                        {
                            name: "--int-list",
                            isDefault: true,
                            id: "e9de035e-5ce2-11ea-aa6d-008cfa5ae621",
                            display: "2",
                            value: "Value 2",
                        },
                        {
                            name: "--int-list",
                            isDefault: false,
                            id: "e9de1a06-5ce2-11ea-aa6d-008cfa5ae621",
                            display: "3",
                            value: "Value 3",
                        },
                    ],
                    name: "",
                    type: "IntegerSelection",
                    omit_if_blank: false,
                    validators: [],
                    label: "Integer List",
                    id: "e9ddc376-5ce2-11ea-aa6d-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: {
                        id: "e9de035e-5ce2-11ea-aa6d-008cfa5ae621",
                        name: "--int-list",
                        value: "Value 2",
                        display: "2",
                        isDefault: true,
                    },
                    required: false,
                },
                {
                    description: "",
                    arguments: [
                        {
                            name: "--decimal-list",
                            isDefault: false,
                            id: "e9de62fe-5ce2-11ea-aa6d-008cfa5ae621",
                            display: "1.2",
                            value: "Value 1.2",
                        },
                        {
                            name: "--decimal-list",
                            isDefault: false,
                            id: "e9de7c4e-5ce2-11ea-aa6d-008cfa5ae621",
                            display: "1.3",
                            value: "Value 1.3",
                        },
                        {
                            name: "--decimal-list",
                            isDefault: false,
                            id: "e9de917a-5ce2-11ea-aa6d-008cfa5ae621",
                            display: "1.4",
                            value: "Value 1.4",
                        },
                    ],
                    name: "",
                    type: "DoubleSelection",
                    omit_if_blank: false,
                    validators: [],
                    label: "Decimal List",
                    id: "e9de4576-5ce2-11ea-aa6d-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
            ],
        },
        {
            id: "59f5c03c-5ce3-11ea-aa6d-008cfa5ae621",
            name: "Output",
            label: "Output",
            isVisible: true,
            parameters: [
                {
                    description: "",
                    name: "--out",
                    type: "FileOutput",
                    omit_if_blank: false,
                    validators: [],
                    label: "Output File by tool",
                    id: "59f5f372-5ce3-11ea-aa6d-008cfa5ae621",
                    file_parameters: {
                        format: "Unspecified",
                        file_info_type: "File",
                        is_implicit: false,
                        data_source: "file",
                        retain: true,
                    },
                    order: 0,
                    isVisible: true,
                    defaultValue: "tool.out",
                    required: true,
                },
                {
                    description: "",
                    name: "",
                    type: "FileOutput",
                    omit_if_blank: true,
                    validators: [],
                    label: "Std Out",
                    id: "59f69ac0-5ce3-11ea-aa6d-008cfa5ae621",
                    file_parameters: {
                        format: "Unspecified",
                        file_info_type: "File",
                        is_implicit: true,
                        data_source: "stdout",
                        retain: true,
                    },
                    order: 0,
                    isVisible: true,
                    defaultValue: "std.out",
                    required: false,
                },
                {
                    description: "",
                    name: "",
                    type: "FileOutput",
                    omit_if_blank: true,
                    validators: [],
                    label: "Std Err",
                    id: "59f72d82-5ce3-11ea-aa6d-008cfa5ae621",
                    file_parameters: {
                        format: "Unspecified",
                        file_info_type: "File",
                        is_implicit: true,
                        data_source: "stderr",
                        retain: true,
                    },
                    order: 0,
                    isVisible: true,
                    defaultValue: "std.err",
                    required: false,
                },
                {
                    description: "",
                    name: "--folder-out",
                    type: "FolderOutput",
                    omit_if_blank: true,
                    validators: [],
                    label: "Output Folder",
                    id: "d128d8a6-5ce3-11ea-aa6d-008cfa5ae621",
                    file_parameters: {
                        format: "Unspecified",
                        file_info_type: "File",
                        is_implicit: false,
                        data_source: "file",
                        retain: true,
                    },
                    order: 0,
                    isVisible: true,
                    defaultValue: "outputs",
                    required: false,
                },
                {
                    description: "",
                    name: "--multi-out",
                    type: "MultiFileOutput",
                    omit_if_blank: true,
                    validators: [],
                    label: "Multi-file Output",
                    id: "d129746e-5ce3-11ea-aa6d-008cfa5ae621",
                    file_parameters: {
                        format: "Unspecified",
                        file_info_type: "File",
                        is_implicit: false,
                        data_source: "file",
                        retain: true,
                    },
                    order: 0,
                    isVisible: true,
                    defaultValue: "*.txt",
                    required: false,
                },
            ],
        },
        {
            id: "d129ebce-5ce3-11ea-aa6d-008cfa5ae621",
            name: "Reference Genome",
            label: "Reference Genome",
            isVisible: true,
            parameters: [
                {
                    description: "",
                    name: "--ref-genome",
                    type: "ReferenceGenome",
                    omit_if_blank: true,
                    validators: [],
                    label: "Reference Genome",
                    id: "d12a1af4-5ce3-11ea-aa6d-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
                {
                    description: "",
                    name: "--ref-seq",
                    type: "ReferenceSequence",
                    omit_if_blank: true,
                    validators: [],
                    label: "Reference Sequence",
                    id: "d12a9a88-5ce3-11ea-aa6d-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
                {
                    description: "",
                    name: "--ref-annotation",
                    type: "ReferenceAnnotation",
                    omit_if_blank: true,
                    validators: [],
                    label: "Reference Annotation",
                    id: "d12b1f1c-5ce3-11ea-aa6d-008cfa5ae621",
                    order: 0,
                    isVisible: true,
                    defaultValue: null,
                    required: false,
                },
            ],
        },
    ],
    tools: [
        {
            attribution: "iPlant QA Test Engineers",
            name: "QATestTool.sh",
            deprecated: false,
            type: "executable",
            description: "Test script to emulate a tool installed",
            id: "66f99e46-854a-11e4-b626-0fcca6cef881",
            location: "/usr/local2/bin",
            version: "0.0.1",
        },
    ],
    references: [],
};