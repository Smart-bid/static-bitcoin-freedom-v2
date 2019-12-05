import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import arrow from './drop-down-arrow.png'

export default class Faq extends Component {

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="Faq">
                <div className="container-fluid box_wrap">
                    <div className="row">
                        <div className="col-12">
                            <div className="question-block">
                                <div className="title">
                                    <p>{languageManager.question_title}</p>
                                </div>
                                <Accordion>
                                    {
                                        languageManager.questions.map((item, index) => {
                                            return (
                                                <Card key={index}>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                                        {item.title}
                                                        <div className="arrow-block">
                                                            <img src={arrow} alt="arrow"/>
                                                        </div>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey={index}>
                                                        <Card.Body><p>{item.answer}</p></Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            )
                                        })
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}