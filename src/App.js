import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import TopSection from './components/TopSection/TopSection'


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            page: 'main',
            showModal: false,
            showSecondModal: false
        };
    }

    handleHide = () => this.setState({ showModal: false });
    handleShow = () => this.setState({ showModal: true });
    secondModalShow = () => this.setState({ showSecondModal: true, showModal: false });
    secondModalHide = () => this.setState({ showSecondModal: false });

    handleStep = (step) => {
        this.setState({step})
    };

    handleSubmit = () => {
        this.props.handleSubmit()
            .then(res => (res.redirectUrl) ? window.location = res.redirectUrl : this.setState({responseError: res.error}, this.handleStep(this.props.step + 1)))
    };

    render() {

        return (
            <div className='App'  onMouseLeave={this.secondModalShow}>
                <TopSection {...this.props} show={this.state.showModal} handleHide={this.handleHide} handleShow={this.handleShow} handleStep={this.handleStep} handleSubmit={this.handleSubmit} secondModalHide={this.secondModalHide} step={this.state.step} lastError={this.state.responseError} showSecondModal={this.state.showSecondModal} showModal={this.secondModalShow} hideModal={this.secondModalHide}  />
            </div>
        )
    }
}
