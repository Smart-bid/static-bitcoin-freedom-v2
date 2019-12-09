import React, {Component} from 'react'
import dalmiro from './images/mp1.png'
import meneo from './images/mp3.png'
import nella from './images/mp5.png'
import mirari from './images/mp4.png'
import pc from './images/customer.png'
import circle from './images/earth.png'
import phone from './images/phone.png'
import star from './images/star.png'
import TradeHistoryComponent from "./TradeHistory";
import TradeHistory from '../../resources/stocks'


export default class AnotherParticipants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_img_block: {
                dalmiro,
                meneo,
                nella,
                mirari
            },
            second_img_block: {
                circle,
                phone,
                pc,
                star
            }
        }

    }

    componentDidMount() {

        let history = [TradeHistory(5000), TradeHistory(5000), TradeHistory(5000), TradeHistory(5000)];
        this.setState({history});
        console.log(this.state.history);
    }

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="Participants">
                <div className="container-fluid box_wrap">
                    <div className="row">
                        <div className="col-12 title steps">
                            <h2>{languageManager.steps_title}</h2>
                        </div>
                        {
                            languageManager.steps_description.map((item, index) => {
                                return (
                                    <div key={index} className="col-md-4 col-12">
                                        <div className={`steps-block steps-block` + (index + 1)}>
                                            <p className="number">{index + 1}</p>
                                            <div className="steps-descriptions">
                                                <p>{item}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="col-12 live-score">
                            <div className="title">
                                <h2>{languageManager.live_score_title}</h2>
                            </div>
                        </div>
                        <div className="col-12 score-block">
                            <TradeHistoryComponent data={this.state.history}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}