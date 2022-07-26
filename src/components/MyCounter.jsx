import { Component } from "react";

class MyCounter extends Component {
    render() {
        const {mcount} = this.props;
        return (
            <div>
                <p>
                    (کامپوننت کلاسی)
                </p>
                <p>شمارنده: {Math.floor(Math.random() * 1000)}</p>
                <p>مقدار من: {mcount + 11}</p>
            </div >
        )
    }
}

// const MyCounter = () => {
//     return (
//         <div>
//             <p>
//                 (کامپوننت تابعی)
//             </p>
//             <p>شمارنده: {Math.floor(Math.random() * 1000)}</p>
//         </div>
//     )
// }

export default MyCounter;