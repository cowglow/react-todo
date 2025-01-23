import {Box, Paper, styled} from "@mui/material";

export const RootWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    max-height: 100svh;
    height: 100vh;
`;
export const MainWrapper = styled(Paper)`
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto;
`
export const FooterWrapper = styled(Paper)`
    display: flex;
    flex-direction: column;
    padding: ${({theme}) => theme.spacing(1)};
    gap: ${({theme}) => theme.spacing(1)};
`
