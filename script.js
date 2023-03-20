function calculate() {
	var price = document.getElementById("price").value;
	var weight = document.getElementById("weight").value;
	var result = document.getElementById("result").value;

	// рассчитываем результат
	var output = (+price + +result +(weight == "5t" ? 0: weight == "15t" ? 784 : weight == "5kg" ? 1231 : weight == "15kg" ? 1678 : weight == "50kg" ? 3023 : 4480)) / 0.84;

	// выводим результат на страницу
	document.getElementById("output").innerHTML = "Итоговая цена для Каспи: " + Math.round(output);
}