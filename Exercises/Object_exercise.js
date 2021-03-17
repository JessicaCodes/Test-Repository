/*
    We are going to build a mini-game that will play out automatically as soon as we run the program.

    What is the game?
        - A good guy vs a bad guy, rpg style battle. "What!?", you might be asking. Ok, lets name this game
            "Demon Slayer", if you will.

    (Note: You can use this clip to get a better concept of what you're trying to have happen between your Demon Slayer &
        demon -> https://youtu.be/vHp0cFUB5as?t=61 
        Definitely don't watch the whole thing.)
    
    What does the program look like?
        - You'll simulate a battle between your Demon Slayer and a demon.
        - You'll run the program and the battle will play out in the terminal.
        - The Demon Slayer and the demon will take turns attacking one another. 
            The stats will be shown after each attack.
        - The demon attacks should have a random damage value, but the Demon Slayer should have a consistent
            attack value. 
        - As soon as either the Demon Slayer or the demon hitpoints reaches 0, the other wins the battle.
        - Use console.log() to show each attack, how many hitpoints either character loses, and the updated stats
            for the ogre and adventurer - also be sure to log the winner.
        - Think about when and where you might want to use a loop...
        - Maybe you want to create an object to keep track of other data that isn't about either character...? Hmmm...
        - I'm leaving the execution of this program a little bit more open ended than our previous mini-projects.

    What's the idea here? Why are we doing this?
        - We want to get a sense of how we can create objects and have them interact. Something to keep in mind is that
            when creating objects you are modeling things - think of our car exercise. The character you're modeling
            will have properties and methods (things they can do).
        

    To do this efficiently you should probably create some sort of plan beforehand. "Timewise, programming is 75–90% 
    planning and 10–25% actually typing code."
*/


// const demonStrikes = {
//     hammerKick: "Hammer Kick! "+ (Math.floor(Math.random() * 50) + 101),
//     superPunch: "Super Punch! "+ (Math.floor(Math.random() * 50) + 51),
//     lightSmack: "Light Smack! "+ (Math.floor(Math.random() * 50) + 1)
// }

// const demonStats = {
//     points:0,
//     score: 200
// }

// const slayerStrikes = {
//     hammerkick: 111,
//     superPunch:  77,
//     lightSmack:  44
// }
//const slayerStats = {
    //     points: 0,
    //     score: 200
    // }
// console.log(randomSlayerStrikes(slayerStrikes))
// console.log(randomDemonStrikes(demonStrikes))


const demon = {
    stats: {
        points: 0,
        score: 200
    },
    strikes: {
        hammerKick: () => (Math.floor(Math.random() * 50) + 101),
        superPunch: () => (Math.floor(Math.random() * 50) + 51),
        lightSmack: () => (Math.floor(Math.random() * 50) + 1)
    }
}

const slayer = {
    stats: {
        points: 0,
        score: 200
    },
    strikes: {
        hammerkick: () => 111,
        superPunch: () => 77,
        lightSmack: () => 44
    }
}


function randomSlayerStrikes(object){
    const strikeKeys = Object.keys(object.strikes);
    const attack = strikeKeys[strikeKeys.length * Math.random()<< 0]
    const damage = object.strikes[attack]()
    console.log("Slayer used " + attack + " for " + damage + " damage" )
    // object[strikeKeys[strikeKeys.length * Math.random()<< 0]])
    // subtract damage from demon.stats.score
    // check if score is < 0 slayer wins else random demon strikes
    
}

function randomDemonStrikes(object){
    const strikeKeys = Object.keys(object);
    return "Demon " + object[strikeKeys[strikeKeys.length * Math.random()<< 0]] // + slayerStats.score - strikeKeys;
    }
    

function battle(){
    if (Math.random()<.5){
        randomSlayerStrikes(slayer)
        //demon.strikes
    } //else {slayer.strikes}
}


battle()