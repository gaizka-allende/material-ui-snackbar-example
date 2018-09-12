import React, { PureComponent } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class App extends PureComponent {
  constructor() {
    super();
    this.toggleSnackbar.bind(this);
    this.handleRequestClose.bind(this);
  }
  state = {
    open: false
  };

  toggleSnackbar = () => {
    this.setState({
      open: !this.state.open
    });
  }

  handleRequestClose = () => {
    console.log('close');
    this.setState({
      open: true
    });
  }

  render() {
    return (
      <div className="App">
	      <Button
          onClick={this.toggleSnackbar}>
		      Bottom-Right
        </Button>
        <Paper>
          <Snackbar
            anchorOrigin={
              { vertical: 'bottom', horizontal: 'right' }
            }
            open={this.state.open}
            onClose={this.toggleSnackbar}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">I love snacks</span>}
            onExiting={this.handleRequestClose}
          />
        </Paper>
      </div>
    );
  }
}

export default App;
