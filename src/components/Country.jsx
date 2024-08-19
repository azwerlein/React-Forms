const { Component } = require("react");


class Country extends Component {
    state = {
        name: 'United States',
        count: 0,
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.name}
                </div>
                <div>
                    {this.state.count}
                </div>
                <button onClick={this.increment}>
                    +
                </button>
            </div>
        );
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }
}

export default Country;
