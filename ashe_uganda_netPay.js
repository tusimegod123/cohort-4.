//declaring and defining a function which calculates the net salary
function netPay(){
	//variable to store the total amount of an employees salary
	var totalSalary = 4000000

	//variable to store the uganda revenue tax rate
	var uraRate = 30/100

	//calculating the tax amount and assigning it to a varibale
	var uraDues = totalSalary * uraRate

	//subtracting the tax amount from the total amount paid to the employee
	var ugNetPay = totalSalary - uraDues

	//print the net payment to the screen
	console.log(ugNetPay)
}

//call the netPay function
netPay()