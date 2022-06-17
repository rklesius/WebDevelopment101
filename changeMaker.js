function CountCoins(change)
{   
    //Start off with zero of each coin
    let quarterCount = 0;
    let dimeCount = 0;
    let nickelCount = 0;
    let pennyCount = 0;
    
    //Check user input
    if(isNaN(change) || (change < 1 || change > 99))
    {
        document.getElementById("changeDisplay").innerHTML = "Invalid Entry";
        return;
    }
    
    //Find the amount of each coin we need
    quarterCount = Math.floor(change/25); //integer division
    change = change % 25; 
    dimeCount = Math.floor(change/10);
    change = change % 10;
    nickelCount = Math.floor(change/5);
    change = change % 5;
    pennyCount = change;
    
    //Send the data to the HTML page
    let output;
    output = "Quarters: " + quarterCount + "\nDimes: " + dimeCount + "\nNickels: " + nickelCount + "\nPennies: " + pennyCount + "\n";
    document.getElementById("changeDisplay").innerHTML = "Change Required: \n " + output;
    return;
}