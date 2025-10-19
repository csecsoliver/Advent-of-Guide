async function firstout(){
  document.getElementById("output").innerHTML = "<h2>Output div</h2>";
  let file_response = await fetch("./input1.txt");
  let file_string = await file_response.text();
  let row_list = file_string.split("\n")
  let col1 = [];
  let col2 = [];
  for (let i of row_list) {
    let line = i.split(" ");
    col1.push(line[0]);
    col2.push(line[line.length-1]);
  }
  col1.sort();
  col2.sort();
  let output = "";
  for (let k of col1){
    output += k + ", ";
  }
  output += "<br><br>";
  for (let k of col2){
    output += k + ", ";
  }
  document.getElementById("output").innerHTML += output;
    
}
async function secondout() {
  document.getElementById("output").innerHTML = "<h2>Output div</h2>";
  let file_response = await fetch("./input1.txt");
  let file_string = await file_response.text();
  let row_list = file_string.split("\n")
  let col1 = [];
  let col2 = [];
  for (let i of row_list) {
    let line = i.split(" ");
    col1.push(line[0]);
    col2.push(line[line.length-1]);
  }
  col1.sort();
  col2.sort();
  let diff = 0;
  for (let index = 0; index < col1.length; index++) {
    diff += Math.abs(col1[index] - col2[index]);
  }
  document.getElementById("output").innerHTML += diff;
}
async function thirdout() {
  document.getElementById("output").innerHTML = "<h2>Output div</h2>";
  let file_response = await fetch("./input1.txt");
  let file_string = await file_response.text();
  let row_list = file_string.split("\n")
  let col1 = [];
  let col2 = [];
  for (let i of row_list) {
    let line = i.split(" ");
    col1.push(line[0]);
    col2.push(line[line.length-1]);
  }
  const occurences = {};
  for (let i of col1){
    occurences[i] = occurences[i] ? occurences[i] + 1 : 1;
  }  
  document.getElementById("output").innerHTML += JSON.stringify(occurences);
}
async function fourthout(){
  document.getElementById("output").innerHTML = "<h2>Output div</h2>";
  let file_response = await fetch("./input1.txt");
  let file_string = await file_response.text();
  let row_list = file_string.split("\n")
  let col1 = [];
  let col2 = [];
  for (let i of row_list) {
    let line = i.split(" ");
    col1.push(line[0]);
    col2.push(line[line.length-1]);
  }
  const occurences = {};
    
  for (let i of col1){
    occurences[i] = occurences[i] ? occurences[i] + 1 : 1;
  }

  let sim_score = 0;
  for (let j of col2){
    sim_score += occurences[j]? occurences[j]*j: 0;
  }
  document.getElementById("output").innerHTML += sim_score;
}