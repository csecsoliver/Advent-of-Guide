async function firstout(){
  document.getElementById("output").innerHTML = "<h2>Output div</h2>";
  let file_response = await fetch("./input1.txt");
  let file_string = await file_response.text();
  let row_list = file_string.split("\n")
  let col1 = [];
  let col2 = [];
  for (i of row_list) {
    line = i.split(" ");
    col1.push(line[0]);
    col2.push(line[-1]);
  }
  col1.sort();
  col2.sort();
  output = "";
  for (k of col1){
    output += k + ", ";
  }
  output += "<br><br>";
  for (k of col1){
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
  for (i of row_list) {
    line = i.split(" ");
    col1.push(line[0]);
    col2.push(line[-1]);
  }
  col1.sort();
  col2.sort();
}