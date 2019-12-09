import React, { Component } from 'react'


export default class TradeHistory extends Component {
    render() {
        let data = this.props.data;
        var nf = new Intl.NumberFormat();

        return (
            <div className='TradeHistory'>
                <div className="count">
                    {/*<div>Won: <span className='win'>{data.wonCount}</span></div>
                    <div>Lost: <span className='loss'>{data.lostCount}</span></div>*/}
                    <div>Last: <span>{data.trades.length}</span></div>
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
                            {data.trades.slice(0).reverse().map(entry => {
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
        )
    }
}
