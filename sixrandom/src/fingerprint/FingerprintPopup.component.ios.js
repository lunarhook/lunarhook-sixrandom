import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AlertIOS } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

class FingerprintPopup extends Component {
  constructor(props) {
    super(props);
		this.state = {
		};
  }
  componentDidMount() {
    FingerprintScanner
      .isSensorAvailable()
      .then(
          FingerprintScanner
          .authenticate({ description: 'Scan your fingerprint on the device scanner to continue' })
          .then(() => {
            this.props.handlePopupDismissed(true);
            //AlertIOS.alert('Authenticated successfully');
          })
          .catch((error) => {
            if(error.name == "FingerprintScannerNotSupported")
            {this.props.handlePopupDismissed(true)}
            else
            {this.props.handlePopupDismissed(false)}
          })
      )

  }

  render() {
    return false;
  }
}

FingerprintPopup.propTypes = {
  handlePopupDismissed: PropTypes.func.isRequired,
};

export default FingerprintPopup;
