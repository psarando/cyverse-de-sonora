/**
 *
 * A dialog thru which users can request to make their app public
 *
 * @author sriram
 *
 *
 */
import React from "react";
import { useTranslation, Trans } from "i18n";
import { Field, FieldArray, Form, Formik } from "formik";
import { useMutation } from "react-query";

import { nonEmptyField, urlField } from "components/utils/validations";
import ids from "./ids";
import constants from "../../constants";
import appsConstants from "./constants";
import { useConfig } from "contexts/config";
import { intercomShow } from "common/intercom";

import {
    announce,
    AnnouncerConstants,
    build,
    FormMultilineTextField,
    FormTextField,
} from "@cyverse-de/ui-lib";

import DEDialog from "components/utils/DEDialog";
import ResourceTypes from "components/models/ResourceTypes";
import FolderInput from "components/apps/launch/params/FolderInput";
import { validateAppName, formatAppDoc } from "components/apps/utils";

import { requestToPublishApp } from "serviceFacades/apps";

import ErrorTypographyWithDialog from "components/utils/error/ErrorTypographyWithDialog";

import { Add, Remove } from "@material-ui/icons";
import {
    Button,
    CircularProgress,
    Grid,
    IconButton,
    Link,
    Typography,
} from "@material-ui/core";

export default function PublishAppDialog(props) {
    const { open, app, handleClose } = props;
    const { t } = useTranslation("apps");
    const { t: i18nCommon } = useTranslation("common");
    const { t: i18nUtil } = useTranslation("util");
    const [config] = useConfig();
    const communityPath = config?.irods?.community_path;
    const parentId = ids.PUBLISH_DLG;
    const [error, setError] = React.useState(null);

    const [requestAppPublication, { status: requestStatus }] = useMutation(
        requestToPublishApp,
        {
            onSuccess: () => {
                announce({
                    text: t("publicationRequestSuccess", {
                        appName: app?.name,
                    }),
                    variant: AnnouncerConstants.INFO,
                });
                handleClose();
            },
            onError: setError,
        }
    );

    const handleSubmit = (values) => {
        const documentation = formatAppDoc(
            values?.name,
            values?.description,
            values?.testData,
            values?.inputDesc,
            values?.parameterDesc,
            values?.outputDesc
        );
        const request = {
            description: values?.description,
            documentation,
            id: app?.id,
            name: values?.name,
            system_id: app?.system_id,
            references: values?.references,
        };
        if (requestStatus !== constants.LOADING) {
            requestAppPublication({
                systemId: app?.system_id,
                appId: app?.id,
                request,
            });
        }
    };

    const validateTestDataPath = (value) => {
        if (!value.includes(communityPath)) {
            return t("testDataPathError");
        }
        return;
    };

    return (
        <Formik
            initialValues={{
                name: app?.name,
                description: app?.description,
                testData: "",
                inputDesc: "",
                parameterDesc: "",
                outputDesc: "",
                references: [],
            }}
            onSubmit={handleSubmit}
            enableReinitialize={true}
        >
            {({ handleSubmit, values }) => {
                return (
                    <Form>
                        <DEDialog
                            open={open}
                            fullWidth={true}
                            maxWidth="sm"
                            onClose={handleClose}
                            baseId={parentId}
                            title={t("publicSubmissionTitle", {
                                appName: app.name,
                            })}
                            actions={
                                <>
                                    <Button
                                        id={build(parentId, ids.CANCEL_BTN)}
                                        onClick={handleClose}
                                    >
                                        {i18nCommon("cancel")}
                                    </Button>
                                    <Button
                                        id={build(parentId, ids.SUBMIT_BTN)}
                                        type="submit"
                                        color="primary"
                                        onClick={handleSubmit}
                                    >
                                        {i18nCommon("submit")}
                                    </Button>
                                </>
                            }
                        >
                            {requestStatus === constants.LOADING && (
                                <CircularProgress
                                    size={30}
                                    thickness={5}
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                    }}
                                />
                            )}
                            {error && (
                                <ErrorTypographyWithDialog
                                    errorMessage={t("publicationRequestFailed")}
                                    errorObject={error}
                                />
                            )}
                            <Trans
                                t={t}
                                i18nKey="publicSubmissionPrompt"
                                components={{
                                    b: <b />,
                                    br: <br />,
                                    support: (
                                        <Link
                                            href="#"
                                            component="button"
                                            onClick={(event) => {
                                                // prevent form submission
                                                event.preventDefault();
                                                intercomShow();
                                            }}
                                        />
                                    ),
                                }}
                            />
                            <Field
                                name="name"
                                label={t("name")}
                                id={build(parentId, ids.PUBLISH.NAME)}
                                validate={(value) =>
                                    validateAppName(
                                        appsConstants.APP_NAME_RESTRICTED_STARTING_CHARS,
                                        appsConstants.APP_NAME_RESTRICTED_CHARS,
                                        value,
                                        t
                                    )
                                }
                                required={true}
                                component={FormTextField}
                            />
                            <Field
                                name="description"
                                label={t("descriptionLabel")}
                                id={build(parentId, ids.PUBLISH.DESCRIPTION)}
                                required={true}
                                component={FormMultilineTextField}
                                validate={(value) =>
                                    nonEmptyField(value, i18nUtil)
                                }
                            />
                            <Field
                                name="testData"
                                id={build(parentId, ids.PATH)}
                                acceptedType={ResourceTypes.FOLDER}
                                label={t("testDataLocation")}
                                component={FolderInput}
                                required={true}
                                validate={(value) =>
                                    validateTestDataPath(value)
                                }
                                helperText={t("testDataPathError")}
                            />
                            <Field
                                name="inputDesc"
                                label={t("inputDescLabel")}
                                id={build(parentId, ids.PUBLISH.INPUT)}
                                required={true}
                                component={FormMultilineTextField}
                                validate={(value) =>
                                    nonEmptyField(value, i18nUtil)
                                }
                                helperText={t("inputDescHelpText")}
                            />
                            <Field
                                name="parameterDesc"
                                label={t("parameterDescLabel")}
                                id={build(parentId, ids.PUBLISH.PARAMS)}
                                required={true}
                                component={FormMultilineTextField}
                                validate={(value) =>
                                    nonEmptyField(value, i18nUtil)
                                }
                            />
                            <Field
                                name="outputDesc"
                                label={t("outputDescLabel")}
                                id={build(parentId, ids.PUBLISH.OUTPUT)}
                                required={true}
                                component={FormMultilineTextField}
                                validate={(value) =>
                                    nonEmptyField(value, i18nUtil)
                                }
                                helperText={t("outputDescHelpText")}
                            />
                            <Typography>{t("attributionLinks")}</Typography>
                            <FieldArray
                                name="references"
                                render={(arrayHelpers) => (
                                    <Grid container spacing={3}>
                                        {values.references &&
                                        values.references.length > 0 ? (
                                            values.references.map(
                                                (link, index) => (
                                                    <>
                                                        <Grid
                                                            item
                                                            xs={6}
                                                            key={build(
                                                                parentId,
                                                                ids.PUBLISH
                                                                    .LINK,
                                                                index
                                                            )}
                                                        >
                                                            <Field
                                                                id={build(
                                                                    parentId,
                                                                    ids.PUBLISH
                                                                        .LINK,
                                                                    index
                                                                )}
                                                                name={`references.${index}`}
                                                                component={
                                                                    FormTextField
                                                                }
                                                                validate={(
                                                                    value
                                                                ) =>
                                                                    urlField(
                                                                        value,
                                                                        i18nUtil
                                                                    )
                                                                }
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={3}
                                                            key={build(
                                                                parentId,
                                                                ids.PUBLISH
                                                                    .LINK,
                                                                index,
                                                                ids.PUBLISH
                                                                    .LINK_DEL_BTN
                                                            )}
                                                        >
                                                            <IconButton
                                                                id={build(
                                                                    parentId,
                                                                    ids.PUBLISH
                                                                        .LINK,
                                                                    index,
                                                                    ids.PUBLISH
                                                                        .LINK_DEL_BTN
                                                                )}
                                                                onClick={() =>
                                                                    arrayHelpers.remove(
                                                                        index
                                                                    )
                                                                } // remove a link from the list
                                                            >
                                                                <Remove />
                                                            </IconButton>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={3}
                                                            key={build(
                                                                parentId,
                                                                ids.PUBLISH
                                                                    .LINK,
                                                                index,
                                                                ids.PUBLISH
                                                                    .LINK_ADD_BTN
                                                            )}
                                                        >
                                                            <IconButton
                                                                id={build(
                                                                    parentId,
                                                                    ids.PUBLISH
                                                                        .LINK,
                                                                    index,
                                                                    ids.PUBLISH
                                                                        .LINK_ADD_BTN
                                                                )}
                                                                onClick={() =>
                                                                    arrayHelpers.insert(
                                                                        index,
                                                                        ""
                                                                    )
                                                                } // insert an empty string at a position
                                                            >
                                                                <Add />
                                                            </IconButton>
                                                        </Grid>
                                                    </>
                                                )
                                            )
                                        ) : (
                                            <Grid item xs={12}>
                                                <Button
                                                    id={build(
                                                        parentId,
                                                        ids.PUBLISH.LINK,
                                                        ids.PUBLISH.LINK_ADD_BTN
                                                    )}
                                                    onClick={() =>
                                                        arrayHelpers.push("")
                                                    }
                                                    variant="outlined"
                                                >
                                                    {t("addLink")}
                                                </Button>
                                            </Grid>
                                        )}
                                    </Grid>
                                )}
                            />
                        </DEDialog>
                    </Form>
                );
            }}
        </Formik>
    );
}
