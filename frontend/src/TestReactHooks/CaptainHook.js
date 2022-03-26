import React, { useState } from 'react';

function CaptainHook() {

    const [pirates, setPirates] = useState([]);

    return (
        <div>
            <p>Your crew has {pirates.length} pirates.</p>
            <button onClick={() => {
                pirates.push({})
                setPirates([...pirates])
            }}>
                Click me
            </button>
        </div>
    );
}

export default CaptainHook;