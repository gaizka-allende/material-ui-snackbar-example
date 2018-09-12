import React, { PureComponent } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class App extends PureComponent {
  constructor() {
    super();
    this.toggleSnackbar.bind(this);
  }
  state = {
    open: false
  };

  toggleSnackbar = () => {
    this.setState({
      open: !this.state.open
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
          />
        </Paper>
      </div>
    );
  }
}

export default App;
