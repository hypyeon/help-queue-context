import React from "react";
import PropTypes from 'prop-types';

export default function ToggleTheme(props) {
  const { theme, toggleTheme } = props;

  if (!theme) {
    throw new Error("ThemeContext must be used within a ThemeContext.Provider!");
  }

  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  }

  return (
    <React.Fragment>
      <button style={styles} onClick={toggleTheme}>
        {theme.textColor === 'AntiueWhite' ? 'toggle light theme' : "toggle dark theme"}
      </button>
      <hr />
    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.object
}