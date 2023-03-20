function calculate() {
	var price = document.getElementById("price").value;
	var weight = document.getElementById("weight").value;
	var result = document.getElementById("result").value;

	// рассчитываем результат
	var output = +price * 0.84 - +result - (weight == "5t" ? 0: weight == "15t" ? 784 : weight == "5kg" ? 1231 : weight == "15kg" ? 1678 : weight == "50kg" ? 3023 : 4480);

	// выводим результат на страницу
	document.getElementById("output").innerHTML = "Маржа: " + Math.round(output);
}