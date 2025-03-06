import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.setState({
            count: 1
        })
        console.log('mount')
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.count === 10){
            this.setState({
                count: 0
            })
        }
    }
    
    render() {
        return (
            <div className="flex justify-center items-center gap-4 mb-8">
                <h1>{this.state.count}</h1>
                <button className="bg-black text-white px-4 py-3 rounded-xl" onClick={() => this.setState({
                    count: this.state.count + 1

                })}>+</button>
            </div>
        );
    }
}

export default Counter;