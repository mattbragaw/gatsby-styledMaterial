import React from "react"

import { Container } from '@material-ui/core';

export default ({ children }) => (
    <Container>
        <h3>Site Starter</h3>
        {children}
    </Container>
)