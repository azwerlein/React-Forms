import Medal from "./Medal";

const { Component } = require("react");


class Country extends Component {
    state = {
        country: this.props.country,
    }

    callback = (type, count) => {
        const country = this.state.country;
        country.categories = country.categories.map(c => {
            if ( c.type === type) {
              return {type: type, count: count};
            }
            return c;
        });
        this.props.callback(country);
    }

    render() {
        const {name, categories} = this.state.country;
        return (
            <div>
                <div>
                    {name}
                </div>
                <div>
                    {
                        categories.map(c => 
                            <Medal
                                key={c.type}
                                type={c.type}
                                count={c.count}
                                callback={this.callback}
                            ></Medal>
                        )
                    }
                </div>
                <div>
                    Total medals:
                    {
                        categories.reduce((a, b) => a + b.count, 0)
                    }
                </div>
            </div>
        );
    }
}

export default Country;
