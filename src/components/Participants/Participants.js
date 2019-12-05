import React, {Component} from 'react'
import dalmiro from './images/mp1.png'
import meneo from './images/mp3.png'
import nella from './images/mp5.png'
import mirari from './images/mp4.png'
import pc from './images/customer.png'
import circle from './images/earth.png'
import phone from './images/phone.png'
import star from './images/star.png'

export default class Participants extends Component {
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

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="Participants">
                <div className="container-fluid box_wrap">
                    <div className="row">
                        <div className="col-12 title">
                            <h2>{languageManager.participants_title}</h2>
                        </div>
                        {
                            languageManager.participants.map((item, index) => {
                                return (
                                    <div key={index} className="col-md-6 col-12 participants-block">
                                        <div className="img-block">
                                            <img src={this.state.first_img_block[item.img]} alt={item.name}/>
                                        </div>
                                        <div className="descriptions">
                                            <h3>{item.name}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="col-12 what-you-get">
                            <h2>{languageManager.register_benefits_tittle[0]}</h2>
                            <p className="subtitle">{languageManager.register_benefits_tittle[1]}</p>
                            <div className="row">
                                {
                                    languageManager.register_benefits.map((item, index) => {
                                        return (
                                            <div key={index} className="col-md-6 col-12">
                                                <div className="benefits-block">
                                                    <div className="benefits-img">
                                                        <img src={this.state.second_img_block[item.img]} alt={item.name}/>
                                                    </div>
                                                    <div className="text-block">
                                                        <div className="title">
                                                            <p>{item.title}</p>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}