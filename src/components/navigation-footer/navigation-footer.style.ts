import { Box, styled } from "@mui/material"

export const StyledNavigationFooter = styled(Box)(({ theme }) => ({
  border: `thin solid ${theme.palette.primary.light}`,
  margin: theme.spacing(1),
}))
