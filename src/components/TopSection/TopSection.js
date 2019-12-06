import React, {Component} from 'react'

import Header from './Header/Header'
import Information from '../Information/Information'
import Participants from '../Participants/Participants'
import Faq from '../Faq/Faq'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Modal from 'react-bootstrap/Modal'
import moment from 'moment'

import first_video from './video/first.mp4'
import second_video from './video/second.mp4'
import logo from './images/logo.png'
import timeLogo from './images/timeLogoText.jpg'
import partners from './images/securStripe.png'
import Regform from "./Regform/Regform";


export default class TopSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: {
                first_video,
                second_video
            }
        }
    }

    render() {
        let languageManager = this.props.languageManager();
        const today = new Date();

        return (
            <div className='TopSection'>
                {/*<Modal show={this.props.showSecondModal} onHide={this.props.secondModalHide} dialogClassName="second-modal">
                    <SecondModalForm {...this.props}/>
                </Modal>*/}
                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col p-0">
                                <div className="logo text-lg-right">
                                    <img src={logo} alt="logo"/>
                                </div>
                            </div>
                            <div className="col text-lg-right p-0">
                                <img src={timeLogo} alt="timeLogo"/>
                            </div>
                            <div className="col p-0">
                                <Header languageManager={this.props.languageManager}/>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="video-block">
                    <div className="container box_wrap">
                        <div className="row">
                            <div className="col-12 video-link">
                                <div className="video-tittle">
                                    <p>{moment(today).format('dddd, MMMM DD, YYYY')}</p>
                                </div>
                                <VideoPlayer link={first_video}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headline">
                    <div className="container-fluid box_wrap">
                        <div className="row">
                            <div className="col-12">
                                <div className="title">
                                    <h1>{languageManager.title[0]} <span>{languageManager.title[1]}</span> {languageManager.title[2]} <span>{languageManager.title[3]}</span> {languageManager.title[4]} <span>{languageManager.title[5]}</span><br/>{languageManager.title[6]}</h1>
                                    <Regform { ...this.props }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Information {...this.props} />

                <Participants {...this.props} />

                <Faq {...this.props} />

                <div className="partners-block">
                    <div className="container-fluid box_wrap">
                        <div className="row">
                            <div className="col-12">
                                <div className="img">
                                    <img src={partners} alt={partners}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container-fluid box_wrap">
                        <div className="row">
                            <div className="col-12">
                                <p>{languageManager.risk[0]}</p>
                                <p>{languageManager.risk[1]}</p>
                                <p>{languageManager.risk[2]}</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
