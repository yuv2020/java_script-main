import React, { Component } from 'react';

class LifeCycleDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        console.log('constructor, component is created');
    }

    static getdriverfrompropTypes(nextprops, prevState){
        console.log('getDriverFromProps, component is re-rendering');
        return null;
    };

    componentDidMount(){
        console.log('componentDidMount, component is rendered on the screen');
        // document.title = `Counter: ${this.state.counter}`;
    }

    shouldComponentUpdate(nextprops, nextState){
        console.log('shouldComponentUpdate, should component is about to render', nextState);
        // return nextState.counter % 2 === 0;
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate, capture same snapshot');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate, component is rendered after the update');
        // document.title = `Counter: ${this.state.counter}`;update', snapshot);
        // document.title = `Counter: ${this.state.counter}`;
    }

    componentWillUnmount(){
        console.log('componentWillUnmount, component is about to be removed from the DOM');
    }

    handleClick = () => {
        this.setState((prevState) => ({counter : prevState.counter + 1}));
    }

    render(){
        return(
            <div>
                <h1> React LifeCycle </h1>
                <p>Counter : {this.state.counter}</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default LifeCycleDemo;