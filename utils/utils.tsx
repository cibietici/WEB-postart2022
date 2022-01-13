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
        color: 'rgb(240, 240, 240)',
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

export const bacteries =  iteration => {

    let bact = []

    for(var i = 1; i <= iteration; i++) {
        const wr = Math.round(Math.random() * 10)
        const hr = Math.round(Math.random() * 10)
        const xpos = (Math.random() * screen.width)
        const ypos = (Math.random() * screen.height)
        bact.push(
            {
                id: i,
                width: wr,
                height: hr,
                top: ypos,
                left: xpos
            }
        )

    }
    return bact
}

export const mums = [
        {
            id: 1,
            width: 2,
            height: 2,
            top: 224,
            left: 220
        },
        {
            id: 2,
            width: 3,
            height: 3,
            top: 221,
            left:223
        },
        {
            id: 3,
            width: 3,
            height: 3,
            top: 220,
            left:226
        }
    ]
