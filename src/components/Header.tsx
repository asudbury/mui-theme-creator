import PropTypes from "prop-types"
import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core"
import TutorialButton from "./Tutorial/TutorialButton"
import GitHubIcon from "@material-ui/icons/GitHub"

import options from "../options"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.fontSize,
  },
  adrian: {
    fontSize: 11,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

const Header = ({ className }) => {
  const themeName = useSelector(
    (state: RootState) => state.savedThemes[state.themeId].name
  )

  const classes = useStyles()
  return (
    <AppBar position="static" color="default" className={className}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography variant="h6" className={classes.title}>
            Material-UI Theme Creator
          </Typography>
          <Typography variant="body2" className={classes.adrian}>
            Adrian Sudbury
          </Typography>
        </div>
        <div>
          <Typography variant="h5">Theme : {themeName}</Typography>
        </div>
        <div>
          {options.showTutorial && <TutorialButton />}

          <IconButton
            href="https://github.com/asudbury/mui-theme-creator"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
