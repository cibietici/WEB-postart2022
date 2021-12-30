export function spots(el) {

    const radius = '50%'
    const where = document.getElementById(el)

    const spot = document.createElement('div')
    spot.style.backgroundColor = 'red'
    spot.style.borderRadius = radius
    where.append(spot)

    where.innerHTML = 'a'
}

export const spotsEl = [
    {
        id: 1,
        color: 'rgb(110, 20, 90)',
        width: 250,
        posX: 30,
        posY: 40,
        animation: 'up'
    },
    {
        id: 2,
        color: 'rgb(100, 10, 50)',
        width: 150,
        posX: 60,
        posY: 40,
        animation: 'down'
    },
    {
        id: 3,
        color: 'rgb(90, 0, 40)',
        width: 300,
        posX: 30,
        posY: 20,
        animation: 'left'
    },
    {
        id: 4,
        color: 'rgb(80, 10, 90)',
        width: 100,
        posX: 60,
        posY: 60,
        animation: 'right'
    }
]

export const bacteries =  () => {
    return [
        {
            id: 1,
            width: 3,
            height: 3
        },
        {
            id: 1,
            width: 3,
            height: 3
        }
        ,
        {
            id: 1,
            width: 3,
            height: 3
        }
    ]
}