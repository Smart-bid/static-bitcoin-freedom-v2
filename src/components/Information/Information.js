import React, {Component} from 'react'
import photo from '../TopSection/images/menBeard.jpg'

export default class Information extends Component {

    render() {
        let languageManager = this.props.languageManager();
        const path = this.props.location.pathname;

        if (path === '/') {
            return (
                <div className="Information">
                    <div className="container-fluid box_wrap">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src={photo} alt="man"/>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="text-block">
                                    <div className="title">{languageManager.first_info_title}</div>
                                    <div className="description">
                                        <p>{languageManager.first_info_description[0]}</p>
                                        <p>{languageManager.first_info_description[1]}</p>
                                        <p>{languageManager.first_info_description[2]}</p>
                                        <p>{languageManager.first_info_description[3]}<span>{languageManager.first_info_description[4]}</span>{languageManager.first_info_description[5]}</p>
                                        <p>{languageManager.first_info_description[6]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="Information Second-info">
                    <div className="container-fluid box_wrap">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src={photo} alt="man"/>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="text-block">
                                    <div className="title">{languageManager.second_info_title}</div>
                                    <div className="description">
                                        <p>{languageManager.second_info_description[0]}</p>
                                        <p>{languageManager.second_info_description[1]}</p>
                                        <p>{languageManager.second_info_description[2]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}