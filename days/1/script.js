async function main(){
    let file_response = await fetch("./input1.txt");
    let file_string = await file_request.text();
    let row_list = file_string.split("\n")
    let col1 = [];
    let col2 = [];
    for (i of row_list) {
      line = i.split(" ");
      col1 += line[0];
      col2 += line[-1];
    }
    
}
main();