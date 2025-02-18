import { useState } from 'react'
import Display from './Display'

const Count = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <Display displayNumber={count} /> {/* Displays the current count */}
            <p>Count: {count}</p> {/* Shows the current count */}
            <button onClick={increaseCount}>Increase</button>
        </div>
    );
};

export default Count