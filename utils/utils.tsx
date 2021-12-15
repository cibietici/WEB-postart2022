export function spots(el) {

    const radius = '50%'
    const where = document.getElementById(el)

    console.log(where)

    const spot = document.createElement('div')
    spot.style.backgroundColor = 'red'
    spot.style.borderRadius = radius
    where.append(spot)

    where.innerHTML = 'a'
}

export const spotsEl = [
    {
        id: 1,
        color: 'red',
        width: 250,
        posX: 30,
        posY: 40,
        animation: 'up'
    },
    {
        id: 2,
        color: 'red',
        width: 150,
        posX: 60,
        posY: 80,
        animation: 'down'
    },
    {
        id: 2,
        color: 'red',
        width: 300,
        posX: 30,
        posY: 30,
        animation: 'up'
    }
]