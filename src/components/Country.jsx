import Box from '@mui/material/Box';
import Medal from "./Medal";
import { Divider } from '@mui/material';
import { Button } from "@mui/material";


const { Component } = require("react");


class Country extends Component {
    state = {
        country: this.props.country,
    }

    updateCallback = (type, count) => {
        const country = this.state.country;
        country.categories = country.categories.map(c => {
            if (c.type === type) {
                return { type: type, count: count };
            }
            return c;
        });
        this.props.updateCallback(country);
    }

    deleteCallback = () => {
        this.props.deleteCallback(this.state.country.id);
    }

    render() {
        const { name, categories } = this.state.country;
        return (
            <Box component="section" sx={{ p: 2, border: 'solid 1px gray', backgroundColor: '#556067' }}>
                <div className='country-header'>
                    <div>
                        {name}
                    </div>
                    <Button variant="contained" color='error' onClick={this.deleteCallback}>
                        Delete
                    </Button>
                </div>
                <Divider></Divider>
                <Box sx={{ display: 'flex' }}>
                    {
                        categories.map(c =>
                            <Medal
                                key={c.type}
                                type={c.type}
                                count={c.count}
                                callback={this.updateCallback}
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
