let currentExpression = "";
const display = document.getElementById("display");

function clearDisplay()
{
	currentExpression = "";
	display.textContent = 0;
}

function deleteLastDigit()
{
	if(currentExpression == "Error")
	{
		clearDisplay();
		return;
	}

	currentExpression = currentExpression.slice(0, -1);
	if(currentExpression == "")
	{
		display.textContent = 0;
	}
	else
	{
		display.textContent = currentExpression;
	}

}

function calculateResult()
{
	try
	{
		// 50 % 2 -> 50 / 100 * 2
		let finalExpression = currentExpression.replace(/%/,"/ 100 *");
		if(finalExpression == "")
		{
			display.textContent = 0;
			return;
		}

		let result = eval(finalExpression);
		if(!isFinite(result))
		{
			currentExpression = "Error";
			display.textContent = "Error";
			return;
		}
		currentExpression = parseFloat(result.toFixed(10)).toString();
		display.textContent = currentExpression;
	}
	catch(error)
	{
		currentExpression = "Error";
		display.textContent = "Error";
	}
}

function appendValue(value)
{
	if(currentExpression == "Error")
	{
		currentExpression = "";
	}

	if(value == "AC")
		clearDisplay();
	else if(value == "DEL")
		deleteLastDigit();
	else if(value == "=")
		calculateResult();
	else
	{
		currentExpression = currentExpression + value;
		display.textContent = currentExpression;
	}
}

const buttons = document.querySelectorAll("#calculator button");
for(let i = 0; i < buttons.length; i++)
{
	buttons[i].addEventListener("click", 
	function ()
	{
		// when i press "=" on calculator it calculates the result, 
		// now when another key is pressed, it appends that data. i want
		// only newly entered data to be appeared, after calculation.

		// Note: changes are required
		const value = buttons[i].getAttribute("data-value");
		appendValue(value);
	});
}
clearDisplay();