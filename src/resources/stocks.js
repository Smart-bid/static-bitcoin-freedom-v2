var TradeHistory = (profit) => {
    let trades = [];
    let stocks = [
        {name: 'USD/JPY', rate: 106.16},
        {name: 'EUR/JPY', rate: 119.00},
        {name: 'AUD/USD', rate: 0.68},
        {name: 'NINTENDO', rate: 39.32},
        {name: 'WOOLWORTHS', rate: 35.50},
        {name: 'AUD/JPY', rate: 71.89},
        {name: 'AUD/NZD', rate: 1.05},
        {name: 'GBP/USD', rate: 1.22},
        {name: 'LOUIS VUITTON', rate: 360.85},
        {name: 'EUR/CAD', rate: 1.49},
        {name: 'BNP', rate: 360.85},
        {name: 'HANG SENG F-AUG16', rate: 173.70},
        {name: 'EUR/JPY', rate: 360.85},
        {name: 'BTC/CNY', rate: 4217.4130},
        {name: 'BTC/USD', rate: 11836.90},
        {name: 'BTC/GBP', rate: 9722.83},
        {name: 'BTC/EUR', rate: 10560.05},
        {name: 'BTC/AUD', rate: 17479.85},
        {name: 'BTC/JPY', rate: 1256617.14},
        {name: 'ETH/CNY', rate: 1584.75},
        {name: 'ETH/USD', rate: 224.69},
        {name: 'ETH/GBP', rate: 184.59},
        {name: 'ETH/EUR', rate: 200.57},
        {name: 'ETH/AUD', rate: 332.00},
        {name: 'ETH/JPY', rate: 23867.24},
        {name: 'LTC/CNY', rate: 624.16},
        {name: 'LTC/USD', rate: 88.58},
        {name: 'LTC/GBP', rate: 72.96},
        {name: 'LTC/EUR', rate: 79.03},
        {name: 'LTC/AUD', rate: 130.20},
        {name: 'LTC/JPY', rate: 9403.61},
        {name: 'BCH/CNY', rate: 2318.51},
        {name: 'BCH/USD', rate: 329.04},
        {name: 'BCH/GBP', rate: 271.00},
        {name: 'BCH/EUR', rate: 293.57},
        {name: 'BCH/AUD', rate: 483.47},
        {name: 'BCH/JPY', rate: 34924.80},
        {name: 'EUR/CHF', rate: 1.0908},
        {name: 'EDG/USD', rate: 1.0565},
        {name: 'VEN/USD', rate: 1.0908},
        {name: 'FRST/USD', rate: 1.8479},
        {name: 'RLC/USD', rate: 1.2782},
        {name: 'ADX/USD', rate: 1.1032},
        {name: 'NEBL/USD', rate: 1.1523},
        {name: 'BLOCK/USD', rate: 1.6598},
        {name: 'BCCOIN/USD', rate: 1.0000},

    ];

    let positions = ['PUT', 'CALL'];

    let wonCount = 0;
    let lostCount = 0;
    
    let getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let initialDate = new Date(2019, getRandomInt(2, 5), getRandomInt(1, 28), getRandomInt(1, 24), getRandomInt(1, 24), getRandomInt(1, 24), getRandomInt(1, 24));

    let totalProfit = 0;

    let generateEntry = (prevDate) => {

        let entry = {
            date: new Date(),
            stock: '',
            position: '',
            inv: '',
            enrate: '',
            exrate: '',
            extime: new Date(),
            pay: '',
            status: ''
        }

        let stock = stocks[getRandomInt(0, stocks.length - 1)];

        entry.date.setDate(prevDate.getDate() + getRandomInt(0, 5));
        entry.date.setTime(prevDate.getTime() + getRandomInt(1000000, 10000000));
        entry.stock = stock.name;
        entry.position = positions[getRandomInt(0, 1)];
        entry.inv = 25 * getRandomInt(1, 10);
        entry.extime.setTime(entry.date.getTime() + getRandomInt(1000000, 100000000));

        let fraction = 100*Math.pow(10, Math.floor(Math.log(stock.rate) / Math.LN10 + 0.000000001));
        entry.enrate = stock.rate + getRandomInt(-10, 10)*(1/fraction) * stock.rate;
        let winrate = getRandomInt(1, 100);
        let entryProfit = 0;


        if (winrate >= 28) {
            // Win
            entry.status = 'WON';
            wonCount++;

            if (entry.position === 'PUT') {
                entry.exrate = entry.enrate - getRandomInt(1, 15)*(1/fraction) * entry.enrate;
                entryProfit = entry.inv * (entry.enrate - entry.exrate)
                entry.pay = entry.inv + entryProfit;
            } else {
                entry.exrate = entry.enrate + getRandomInt(1, 15)*(1/fraction) * entry.enrate;
                entryProfit = entry.inv * (entry.exrate - entry.enrate);
                entry.pay = entry.inv + entryProfit;
            }
        } else {
            // Loss
            entry.status = 'LOST';
            lostCount++;
            
            if (entry.position === 'PUT') {
                entry.exrate = entry.enrate + getRandomInt(1, 15)*(1/fraction) * entry.enrate;
                entryProfit = entry.inv * (entry.enrate - entry.exrate);
                entry.pay = 0;
            } else {
                entry.exrate = entry.enrate - getRandomInt(1, 15)*(1/fraction) * entry.enrate;
                entryProfit = entry.inv * (entry.exrate - entry.enrate);
                entry.pay = 0;
            }
        }

        totalProfit = totalProfit + entryProfit;
        trades.push(entry);
    }

    let prevDate = initialDate;

    for (let i = 0; totalProfit <= profit; i++) {

        generateEntry(prevDate);
        prevDate = trades[i].date;

    }

    trades.map(entry => {

        entry.date = entry.date.getFullYear() + "-" + ('0' + (entry.date.getMonth()+1)).slice(-2) + "-" + ('0' + (entry.date.getDate()+1)).slice(-2) + " " + ('0' + (entry.date.getHours()+1)).slice(-2) + ":" + ('0' + (entry.date.getMinutes()+1)).slice(-2) + ":" + ('0' + (entry.date.getSeconds()+1)).slice(-2);
        entry.extime = entry.extime.getFullYear() + "-" + ('0' + (entry.extime.getMonth()+1)).slice(-2) + "-" + ('0' + (entry.extime.getDate()+1)).slice(-2) + " " + ('0' + (entry.extime.getHours()+1)).slice(-2) + ":" + ('0' + (entry.extime.getMinutes()+1)).slice(-2) + ":" + ('0' + (entry.extime.getSeconds()+1)).slice(-2);
    
    }) 

    return {trades, wonCount, lostCount};
}

export default TradeHistory;