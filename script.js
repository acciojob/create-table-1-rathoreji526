function insert_Row() {
    let table = document.querySelector("#sampleTable");
	let row = document.createElement("tr");
	let td1 = document.createElement("td");
	td1.textContent = "New Cell1";
	let td2 = document.createElement("td");
	td2.textContent = "New Cell2";
	row.append(td1);
	row.append(td2);
	table.prepend(row);
}
