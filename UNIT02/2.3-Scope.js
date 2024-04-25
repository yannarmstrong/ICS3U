/*
Unit 2 Lesson 3: Basic understanding of scope

Author's Name: Yann Armstrong
*/

let waterTemp = "cold";

function hotWater() {
  if (waterBoilerSwitch() == false){
    waterBoilerSwitch();
  }
  return waterTemp;
}

function waterBoilerSwitch(){
  if (waterTemp == "cold") {
    waterTemp = "hot";
    return true;
  } else {
    waterTemp = "cold";
    return false;
  }
}

console.log(hotWater());