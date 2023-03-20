function calculate() {
	var price = document.getElementById("price").value;
	var weight = document.getElementById("weight").value;
	var result = document.getElementById("result").value;

	// рассчитываем результат
	var output = +price * 0.84 - +result - (weight == "1000" ? 0: weight == "15000" ? 784 : weight == "5000" ? 1231 : weight == "15000" ? 1678 : weight == "50000" ? 3023 : 4480);

	// выводим результат на страницу
	document.getElementById("output").innerHTML = "Маржа: " + Math.round(output);
}