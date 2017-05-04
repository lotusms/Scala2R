import React from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../../actions';

class ThemeOptions extends React.Component {

  onChange = (e) => {
    const { handleChange } = this.props;
    const newThemeOption = e.target.value;
    handleChange(newThemeOption);
  }

  render() {
    const { theme } = this.props;

    return (
      <section>
        
      </section>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme,
});
const mapDispatchToProps = dispatch => ({
  handleChange: (themeOption) => {
    dispatch(changeTheme(themeOption));
  }
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeOptions);
