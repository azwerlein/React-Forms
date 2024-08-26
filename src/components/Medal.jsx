import Button from '@mui/material/Button';
import { Box } from '@mui/material';
const { Component } = require("react");



class Medal extends Component {

    render() {
        return (
            <Box sx={{margin: '4px'}}>
                <div>{this.props.type}</div>
                <div>{this.props.count}</div>
                <Button variant="contained" color='success' sx={{mx: '2px'}} onClick={this.increment}>
                    +
                </Button>
                <Button variant="contained" color='error' sx={{mx: '2px'}} onClick={this.decrement}>
                    -
                </Button>
            </Box>
        );
    }

    increment = () => {
        const {type, count, callback} = this.props;
        callback(type, count + 1);
    }

    decrement = () => {
        const {type, count, callback} = this.props;
        if (count > 0) {
            callback(type, count - 1);
        }
    }
}

export default Medal;