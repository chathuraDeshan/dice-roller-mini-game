// Dice roller program

function rollDice(){


    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(let i = 0; i< numofDice; i++){
        const value = Math.floor( Math.random() * 6) + 1 ;
        values.push(value);
        images.push(`<img src = "Dice_pngs/${value}.png" alt = "Dice ${value}" >`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join('');

    
}