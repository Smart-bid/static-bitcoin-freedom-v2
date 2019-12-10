import React, { Component } from 'react'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import yusuf from './images/mp1.png'
import berat from './images/mp2.png'
import mustafa from './images/mp3.png'
import zeynep from './images/mp4.png'
import yagmur from './images/mp5.png'
import ela from './images/mp6.png'



export default class TradeHistory extends Component {
    state = {
        images: [
            yusuf,
            berat,
            mustafa,
            zeynep,
            yagmur,
            ela
        ]
    };
    render() {
        if (this.props.data) {
          return <NewTable data={this.props.data} {...this.props} images={this.state.images} />
        } else {
            return <></>
        }
    }
}

const NewTable = (props) => {
    const data = props.data;
    let nf = new Intl.NumberFormat();
    let images = props.images;
    let languageManager = props.languageManager();
    return (
        <Tab.Container id="tab-panel" defaultActiveKey="0">
            <div className="trade-head-block">
                <div className="container-fluid box_wrap">
                    <div className="row">
                        <Nav className="nav-trader-block">
                            {
                                languageManager.trade_head.map((item, index) => {
                                    return (
                                        <div key={index} className="col-2 tab-item">
                                            <Nav.Item>
                                                <Nav.Link eventKey={index}>
                                                    <div className="trade-people">
                                                        <div className="img-block">
                                                            <img src={images[index]} alt={item.name}/>
                                                        </div>
                                                        <div className="description">
                                                            <p className="name">{item.name}</p>
                                                            <p className="start">{item.start[0]}<span>{item.start[1]}</span></p>
                                                            <p className="profit">{item.end[0]} <span>{item.end[1]}</span> </p>
                                                        </div>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </div>
                                    )
                                })
                            }
                        </Nav>
                    </div>
                </div>
            </div>
            <Tab.Content>
                {
                    data.map((item, index) => {
                        return (
                            <Tab.Pane key={index} eventKey={index}>
                                <div className='TradeHistory'>
                                    <div className="count">
                                        <div>Won: <span className='win'>{item.wonCount}</span></div>
                                        <div>Lost: <span className='loss'>{item.lostCount}</span></div>
                                        <div>Last: <span>{item.trades.length}</span></div>
                                    </div>
                                    <div className="history">
                                        <div className="title">
                                            <div className="main">
                                                <div>TRADE HISTORY</div>
                                            </div>
                                        </div>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>exprired time</th>
                                                <th>asset</th>
                                                <th>position</th>
                                                <th>investment</th>
                                                <th>entry rate</th>
                                                <th>expiration rate</th>
                                                <th>execution time</th>
                                                <th>payout</th>
                                                <th>status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {item.trades.slice(0, 12).reverse().map(entry => {
                                                return (
                                                    <tr key={entry.date}>
                                                        <td>{entry.date}</td>
                                                        <td>{entry.stock}</td>
                                                        <td className={entry.position}>{entry.position}</td>
                                                        <td>{entry.inv}</td>
                                                        <td>{nf.format(entry.enrate.toFixed(3))}</td>
                                                        <td>{nf.format(entry.exrate.toFixed(3))}</td>
                                                        <td>{entry.extime}</td>
                                                        <td>{nf.format(entry.pay.toFixed(3))}</td>
                                                        <td className={entry.status}><div>{entry.status}</div></td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </table>
                                        <div className="bottom"></div>
                                    </div>
                                </div>
                            </Tab.Pane>

                        )
                    })
                }
            </Tab.Content>
        </Tab.Container>
    )
}
