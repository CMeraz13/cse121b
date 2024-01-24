let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;
shot = Math.random();

function isHit() {
  // should return true if a randomly generated number is greater than .5, false if it is less than .5
    if(shot >.5){
        shipHealth--;
        console.log("Hit?");
    } else{
        console.log("You missed bozo");
    }
}

function shipCanFire() {
  // return true if the ships health is above 0 AND ammo is above 0 false otherwise
    if(shipHealth <= 0){
        return false;
    } else if(shipHealth > 0 && shipAmmo > 0){
        console.log("Cannons ready!")
        return true;
    }else {
        console.log("We need to reload!");
        return false;
    }
}
function isDestroyed(health) {
  // return true if health is zero or less
  if(shipHealth > 0){
    console.log("Health is at " + shipHealth);
    return false;
  } else {
    console.log("GAME OVER");
    return true;
  }

}
function reloadShip() {
  // reduce ship health by 1 and increase ammo by 3
  if(shipHealth > 0 && shipAmmo <= 0){
    shipAmmo +=3;
    shipHealth--;
    console.log("Cannons reloaded!");
  } else if (shipHealth == 1){
    console.log("Can't reload, not enough health.");
  }
}


function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

  