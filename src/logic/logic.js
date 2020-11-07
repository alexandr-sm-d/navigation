// let data = ['9;4;4']

export function getWay(x1, y1, x2, y2, x3, y3, d) {
    let historyOfMovement = []
    const v = 1000

    d.forEach(timeList => {

        let points = []
        let distanceList = timeList.split(';').map(time => time * v)

        let step1 = getPoints(x1, y1, distanceList[0] / 1000, x2, y2, distanceList[1] / 1000)
        let step2 = getPoints(x1, y1, distanceList[0] / 1000, x3, y3, distanceList[2] / 1000)

        points.push(handlerCoordinats(step1))
        points.push(handlerCoordinats(step2))

        let objectCoordinats = getCommonPoint(points)
        // console.log('objectCoordinats', objectCoordinats)
        historyOfMovement.push(objectCoordinats)
    })

    return historyOfMovement;
}

function getPoints(x1, y1, r1, x2, y2, r2) {
    let d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    if (d > r1 + r2 && d < Math.abs(r1 - r2)) {
        console.log('error')
        return
    } else {
        let b = (r2 ** 2 - r1 ** 2 + d ** 2) / (2 * d)
        let a = d - b
        let h = Math.sqrt(r2 ** 2 - b ** 2)
        let x = x1 + (x2 - x1) / (d / a)
        let y = y1 + (y2 - y1) / (d / a)
        let x3 = x - (y - y2) * h / b;
        let y3 = y + (x - x2) * h / b;
        let x4 = x + (y - y2) * h / b;
        let y4 = y - (x - x2) * h / b;
        return `${x3}, ${y3}__${x4}, ${y4}`
    }
}

function handlerCoordinats(value) {
    return value
        .split('__')
        .map(point => point
            .split(',')
            .map(v => Number(v).toFixed(4))
            .join(','))
        .join(' ; ')
}

function getCommonPoint(arr) {
    let data = []
    arr.forEach(str => {
        str.split(';').forEach(c => data.push(c))
    })

    let dataTrim = data.map(el => el.trim().split(','))

    for (let i = 0; i < dataTrim.length; i++) {
        let sample = dataTrim[i][0]
        for (let j = i + 1; j < dataTrim.length; j++) {
            if (Math.abs(sample - dataTrim[j][0]) <= 0.05 || Math.abs(sample) === Math.abs(dataTrim[j][0])) {
                if (Math.abs(dataTrim[i][1] - dataTrim[j][1]) <= 0.05
                    || Math.abs(dataTrim[i][1]) === Math.abs(dataTrim[j][1])) {
                    return dataTrim[j]
                }
            }
        }
    }
}

