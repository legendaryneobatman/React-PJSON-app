import React, {useState} from 'react';

const SimpleForm = () => {
    const [value, setValue] = useState('Some Value')

    return (
        <form >
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </form>
    );
};

export default SimpleForm;
