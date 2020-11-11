
const calButton = document.querySelector("#form-container button");

//variable Declaration

const GCT = 0.165,
fuel_tax = 0.05,
env_tax = 0.06,
discount = 0.1;



  

function car_dealer(e){ 

    e.preventDefault();

    //prompt statements

    var tax_price = 0; 
      //let ask_car = prompt("Which car will you be purchasing? ");
      const ask_car = document.querySelector("#car_name").value;
      //let car_price = parseInt(prompt("Enter the price of the car: "));
      const car_price = parseInt(document.querySelector("#car_price").value);
      //let discount_check = prompt("Will you be buying more "+ ask_car+" ? y/n and x to exit: ");
      const discount_check = document.querySelector("#car_num").value;
      //let cc_rating = parseInt(prompt("What is the car rating: "));
      const cc_rating = parseInt(document.querySelector("#car_rating").value);
      //let car_age = parseInt(prompt("How old is the car: ")); 
      const car_age = parseInt(document.querySelector("#car_age").value);


    if(discount_check < 1) return;
    
                 tax_price = discount_check > 1? discount_check * ((car_price + (car_price * GCT)) - (car_price * discount)): car_price + car_price * GCT;

                    if(cc_rating > 2000)
                    {
                        tax_price += tax_price * fuel_tax;

                        if(car_age> 5){

                            tax_price += tax_price * env_tax;
                        }
                    
                    }
                    if(car_age == 6 && cc_rating == 2500){
                        
                        tax_price += tax_price * fuel_tax + tax_price * env_tax
                        
                    }   

                    tax_price = discount_check > 1? discount_check * ((car_price + (car_price * GCT)) - (car_price * discount))+alert("The name of this car is: "+ask_car+"\nThe original price was: "+ car_price + "\n The tax amount is: "+GCT/100*car_price+"\n The discount: "+discount/100*car_price+"\n The final cost: "+ tax_price ): 
                    car_price + car_price * GCT + alert("The name of this car is: "+ask_car+"\n The original price was: "+ car_price + "\n The tax amount is: "+GCT/100*car_price+"\n The final cost: "+ tax_price );

                


          

/*
if(discount_check < 1) return;
    
let tax_price = discount_check > 1 ? discount_check * (car_price + car_price * GCT - car_price * discount) : car_price + car_price * GCT;
  
  if (cc_rating > 2000) {
    tax_price += tax_price * fuel_tax;

    if (car_age > 5) tax_price += tax_price * env_tax;
  }
  if (car_age == 6 && cc_rating == 2500) {
    tax_price = tax_price + tax_price * fuel_tax + tax_price * env_tax;
  }

  alert(
    `The original price was: ${car_price}\n
     The tax amount is: ${GCT*100}%\n 
     The discount: ${discount*100}%\n
     The final cost: ${tax_price}` 
  );
 }*/
}
 calButton.addEventListener("click", car_dealer);
 