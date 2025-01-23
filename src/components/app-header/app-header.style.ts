import {Box, styled} from "@mui/material";

export const Branding = styled("img")`
    width: ${({theme}) => theme.spacing(6)}
`
export const StyledAppHeaderContent = styled(Box)`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`
export const StyledAppBarOffset = styled(Box)`
    height: ${({theme}) => theme.spacing(8)};
`
