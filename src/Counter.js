import { Component } from 'react';
import MyCounter from './components/MyCounter';

import './Counter.css';

class Counter extends Component {
    render() {
        return (
            <div className="Counter">
                <p>
                    (کامپوننت کلاسی)
                </p>
                <h1>شمارنده ی من:</h1>
                <br />
                <MyCounter mcount={0} count={6} />
            </div>
        )
    }
}

// const Counter = () => {
//     return (
//         <div className="Counter">
//             <p>
//                 (کامپوننت تابعی)
//             </p>
//             <h1>شمارنده ی من:</h1>
//             <br />
//             <MyCounter />
//         </div>
//     )
// }

export default Counter;