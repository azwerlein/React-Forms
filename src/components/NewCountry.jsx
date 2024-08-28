import { Button } from "@mui/material";


function NewCountry(props) {

    const makeCountry = () => {
        const name = prompt('Please enter the name of a country.');
        if (name) {
            props.callback(name);
        } else {
            alert('Please enter a name for the country.');
        }
    }

    return (
        <div>
            <Button variant="contained" color='primary' onClick={makeCountry}>
                New country
            </Button>
        </div>
    );
}

export default NewCountry;
