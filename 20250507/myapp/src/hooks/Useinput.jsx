import React from 'react'
import { useState } from 'react';

const Useinput = () => {
    const [value, setValue] = useState('');
    const onChange = (e) => {
        
        setValue(e.target.value)
    }

    return {value, onChange}
}

export default Useinput
