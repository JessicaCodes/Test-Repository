const demonStrikes = {
    hammerKick: ["Hammer Kick! ", (Math.floor(Math.random() * 50) + 101)],
    superPunch: ["Super Punch! ", (Math.floor(Math.random() * 50) + 51)],
    lightSmack: ["Light Smack! ", (Math.floor(Math.random() * 50) + 1)]
}

const demonStats = {
    points:0,
    score: 200
}

const slayerStrikes = {
    hammerkick: ["Hammer Kick! ", 111],
    superPunch: ["Super Punch! ", 77],
    lightSmack: ["Light Smack! ", 44]
}

const slayerStats = {
    points: 0,
    score: 200
}

// function battle(){
//     let demonHealth = demonStats.score;
//     let slayerHealth = slayerStats.score;
//     if (demonStats.score == 0) {
//         return "Slayer Wins!"
//     } 
//     if (slayerStats.score == 0) {
//         return "Demon Wins!"
//     }
// }


const randomSlayerStrikes = function(slayerStrikes){
    const strikeKeys = slayerStrikes.keys(slayerStrikes);
    const randomStrike = Math.floor(strikeKeys.length+1 * Math.random())
    return slayerStrikes[strikeKeys[randomStrike]];
    }

// function randomDemonStrikes(demonStrikes){
//     const strikeKeys = demonStrikes.keys(demonStrikes);
//     return demonStrikes[strikeKeys[strikeKeys.length * Math.random()<< 0]] // + slayerStats.score - strikeKeys;
//     }

// function demonUpdatedStats(){
//     // let score = demonStats.score
//     if(demonStats.score <= 0){
//       return "Demon Loses!"
//     }   else {
//     return demonStats.score = demonStats.score - hits;
    
// }
// } 
//  console.log(demonUpdatedStats())       

// function battle(){
//     let demonPoints = demonStats.points + demonStats.points;
//     let slayerPoints = slayerStats.points + slayerStats;
//     let demonScore = demonStats.score - slayerStats.points;
//     let slayerScore = slayerStats.score - demonStats.points;
//     while (demonStats.score > 0 && slayerStats.score > 0){
//         console.log("Demon Points !" + demonPoints +"Demon Score!" + demonScore)
//         console.log("Slayer Points! " + slayerPoints + "Slayer Score! " + slayerScore)
//     } return demonPoints, slayerPoints, demonScore, slayerScore
// }
// console.log(battle())

    
console.log(randomSlayerStrikes)
//console.log(randomDemonStrikes(demonStrikes))





;//(strikeKeys.length+1 * Math.random())

