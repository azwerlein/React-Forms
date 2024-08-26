const { Component } = require("react");



class Medal extends Component {

    render() {
        return (
            <div>
                <div>{this.props.type}</div>
                <div>{this.props.count}</div>
                <button onClick={this.increment}>
                    +
                </button>
                <button onClick={this.decrement}>
                    -
                </button>
            </div>
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