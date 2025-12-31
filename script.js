const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
	let total = 0;
	prices.forEach(price => {
		total += Number(price.innerText);
	});
	const table = document.querySelector("table");
	if(document.getElementById("totalRow"))
return;
	const totalRow = document.createElement("tr");
	totalRow.id = "totalRow";
	const totalCell = document.createElement("td");
	totalCell.colSpan = 2;
	totalCell.innerText = "Total Price: Rs " + total;

	totalRow.appendChild(totalCell);
	table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

