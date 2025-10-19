async function main() {
  document.getElementById("output").innerHTML = "<h2>Output div</h2>";
  let file_response = await fetch("./input2.txt");
  let file_string = await file_response.text();
  let file_lines = file_string.split("\n");
  return file_lines;
}

async function secondout() {
  let file_lines = await main();
  let unsafe_num = 0;
  for (let i of file_lines) {
    let data_list = i.split(" ");


    data_list = data_list.map(text => Number(text));


    let ascending = (data_list[0] - data_list[1]) < 0;
    let last;
    for (let j of data_list) {
      if (last === undefined){
        last = j;
        continue;
      }
      if (Math.abs(last - j) > 3 || Math.abs(last - j) === 0 || (((last - j) < 0)) !== ascending) { // last-j is negative if j is larger, so it's ascending
        unsafe_num++;
        break;
      }
      last = j;
    }
  }
  document.getElementById("output").innerHTML += (file_lines.length - unsafe_num);
}
async function thirdout(){
  let file_lines = await main();
  let unsafe_num = 0;
  for (let i of file_lines) {
    let data_list = i.split(" ");


    data_list = data_list.map(text => Number(text));



    if (!is_safe(data_list)) {
      let unsafe_copies = 0;
      for (let j = 0; j < data_list.length; j++) {
        let one_ignored = data_list.filter((value, index) => index !== j);
        if (!is_safe(one_ignored)){
          unsafe_copies ++; // This one is the one indicating the number of unsafe permutations of this one line.
        }
      }
      if (unsafe_copies === data_list.length) {
        unsafe_num ++; // this one is the global
      }
    }

  }
  document.getElementById("output").innerHTML += (file_lines.length - unsafe_num);
}

function is_safe(data_list){
  let ascending = (data_list[0] - data_list[1]) < 0;
  let last;
  for (let j of data_list) {
    if (last === undefined){
      last = j;
      continue;
    }
    if (Math.abs(last - j) > 3 || Math.abs(last - j) === 0 || (((last - j) < 0)) !== ascending) {
      return false;
    }
    last = j;
  }
  return true;
}