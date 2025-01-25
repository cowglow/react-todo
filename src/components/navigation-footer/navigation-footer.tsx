import { Box, Link, Typography } from "@mui/material"
import { StyledNavigationFooter } from "./navigation-footer.style.ts"

export default function NavigationFooter() {
  const links: Record<string, string>[] = [
    {
      href: "https://reactjs.org/tutorial/tutorial.html",
      ariaLabel: "ReactJS Tutorial Link",
      label: "ReactJS",
    },
    {
      href: "https://material-ui.com",
      ariaLabel: "Material-UI for React",
      label: "MaterialUI",
    },
    {
      href: "https://github.com/cowglow/react-todo",
      ariaLabel: "View the source code on GitHub",
      label: "GitHub Repository",
    },
  ]
  return (
    <StyledNavigationFooter>
      <Typography variant="subtitle2">
        Made with <br />
        <Box display="flex" flexDirection="column">
          {links.map((link) => (
            <Link href={link.href} target="_blank" aria-label={link.ariaLabel}>
              {link.label}
            </Link>
          ))}
        </Box>
      </Typography>
    </StyledNavigationFooter>
  )
}
