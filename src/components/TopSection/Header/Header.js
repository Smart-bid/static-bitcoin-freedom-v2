import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: {},
            seconds: 895
        };
        this.timer = 0;
    }

    secondsToTime = (sec) => {

        let divisor_for_minutes = sec % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        minutes = ("0" + minutes).slice(-2);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.round(divisor_for_seconds);
        seconds = ("0" + seconds).slice(-2);

        let timeObj = {
            "minutes": minutes,
            "seconds": seconds
        };
        return timeObj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown = () => {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div className='Header'>
                <p>{this.state.time.minutes}:{this.state.time.seconds}</p>
            </div>
        )
    }
}
