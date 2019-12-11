import React, { Component } from 'react'
import Regform from "../Regform/Regform";
import partners from "../images/securStripe.png";


class ModalForm extends Component {

    render() {

        let languageManager = this.props.languageManager();

        return (
            <div className="SecondRegform">
                <div className="title">
                    <p>{languageManager.modal[0]}</p>
                    <p>{languageManager.modal[1]}</p>
                </div>
                <div className='inner'>
                    <div className="main-modal-text">
                        <p>{languageManager.modal_description[0]}<span>{languageManager.modal_description[1]}</span><br/>{languageManager.modal_description[2]}</p>
                    </div>
                   <Regform {...this.props} />
                   <p className="small-text">{languageManager.modal_small_text}</p>
                    <div className="popup-img">
                        <img src={partners} alt={partners}/>
                    </div>
                </div>
                <div className="close" onClick={this.props.onHide}></div>
            </div>
        )
    }
}
export default (ModalForm);
