import React from "react"

import { Helmet } from "react-helmet"

import Layout from "../components/layouts/defaultLayout"
import { Button } from "@material-ui/core";

export default () => <Layout>
    <Helmet title="Home" />
    <Button>Test</Button>
</Layout>
