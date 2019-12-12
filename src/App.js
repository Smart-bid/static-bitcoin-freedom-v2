import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import withQueryString from './components/withQueryString'
import TopSection from './components/TopSection/TopSection'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'main',
            showModal: false
        };
    }

    handleHide = () => this.setState({ showModal: false });
    handleShow = () => this.setState({ showModal: true });


    render() {

        return (
            <div className='App'  onMouseLeave={this.handleShow}>
                <Switch>
                    <Route exact path="/" render={() =>
                        <TopSection {...this.props}
                                    show={this.state.showModal}
                                    handleHide={this.handleHide}
                                    handleShow={this.handleShow}/>
                    } />
                    <Route path="/members" render={() =>
                        <TopSection {...this.props}
                                    show={this.state.showModal}
                                    handleHide={this.handleHide}
                                    handleShow={this.handleShow}/>
                    } />
                </Switch>

            </div>
        )
    }
}
export default withRouter(withQueryString(App))
