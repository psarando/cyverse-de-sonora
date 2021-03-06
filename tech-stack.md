Sonora Tech Stack
=================

## Javascript / React / Material-UI
[React](https://reactjs.org/) is an open-source Javascript library developed by Facebook. 

We chose to use React in Sonora in part because the dev team had already gotten familiar with it in the 
old [Discovery Environment](https://github.com/cyverse-de/ui/) code and found success there.
Especially with the improved and simplified
[event](https://reactjs.org/docs/handling-events.html)
and [state management](https://reactjs.org/docs/state-and-lifecycle.html)
in React, compared to the older GWT framework.

Additionally, React is declarative, can be functional, has a lot of active support, and a growing 
ecosystem of tools. Their overall philosophy of building small, reusable components was also appealing 
in that it presented the possibility of sharing components across sections of the Discovery Environment
 as well as across CyVerse products.

[Material-UI](https://material-ui.com/) is an open-source React component library built to Google's 
Material Design spec. 
It has helped us accomplish some of the big goals we wanted in the Discovery Environment such as 
accessibility, theming, and mobile-friendliness.  
The look and feel of Material-UI's components also have an element of familiarity which hopefully adds 
to how intuitive Sonora feels to new users.

[Jest](https://facebook.github.io/jest/)
is the testing framework included by React's
[create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
tool that allows for unit testing and snapshot comparisons.
It also can run on the command-line watching for changes in files,
re-runing any related tests as changes are made.

## NextJs
[NextJs](https://nextjs.org/) is an open-source React framework built by Zeit.  It enables Sonora to have 
server-side rendering, automatic code splitting, browsing history, and pages.  All of which are requested 
features we didn't have in the Discovery Environment.

NextJs also has a really beginner friendly [tutorial](https://nextjs.org/learn/basics/getting-started) 
to help get started.

## Express
[Express](https://expressjs.com/) is an open-source web framework for Node.js and handles requests and 
[routing](https://expressjs.com/en/guide/routing.html) in Sonora.  It allows you to add whatever kind 
of middleware you want for things like body parsing, error handling, logging, etc.

## Keycloak
[Keycloak](https://www.keycloak.org/) is an open-source identity provider with support for single
sign-on. It works with several user storage backends, including LDAP. It also supports integration with
other identity providers, which will be potentially useful if we want to allow users to log in using
their home institution's credentials. The login page can also be customized without being coupled too
tightly with the version of Keycloak being used.

Keycloak supports SAML and openid-connect along with a few other protocols. We're using openid-connect in
conjunction with [Keycloak Connect](https://github.com/keycloak/keycloak-nodejs-connect) to integrate Keycloak
into Sonora.
