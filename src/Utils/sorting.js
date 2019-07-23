module.exports = {
    randomHouse: (udpateHouseInfo, historyPush) => {
       const rando =  Math.ceil(Math.random() * 4)
       const house = rando === 1 ? "gryffindor"
       : rando ===  2 ? "hufflepuff"
       : rando === 3 ? "slytherin"
       : "Ravenclaw"
       const mainColor = rando === 1 ? '#740001' : rando === 2 ? '#372e29' : rando === 3 ? '#000000' : '#000000'
    const secondaryColor = rando === 1 ? '#d3a625' : rando === 2 ? '	#ecb939' : rando === 3 ? '#2a623d' : '#0066e2'

       udpateHouseInfo({house, mainColor,secondaryColor})
       historyPush(`/house/${house}`)
    }
}