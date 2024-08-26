import Box from '@mui/material/Box';
import Medal from "./Medal";
import { Divider } from '@mui/material';

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
            <Box component="section" sx={{p: 2, border: 'solid 1px gray', backgroundColor: '#556067'}}>
                <div>
                    {name}
                </div>
                <Divider></Divider>
                <Box sx={{display: 'flex'}}>
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
                </Box>
                <div>
                    Total medals:
                    {
                        categories.reduce((a, b) => a + b.count, 0)
                    }
                </div>
            </Box>
        );
    }
}

export default Country;
