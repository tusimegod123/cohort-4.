function paye(netPaye,tax){
    //calculating for pay
    let paye = netPaye * tax

    //Printing the result of paye on the console
      console.log('paye is:', (paye))
    
     
    
     //Calculating how much the worker actaully takes home
       let takeHome = netPaye - paye

     //printing the takeHome amount on the console
       console.log('take home is:', (takeHome))
   
}
 paye(250000,30/100);


 //Another function calculating for maths and Science marks
 function marks(maths,science) //declaring the marks function
 {
    //assigning the maths and sceience variables to marks 
    let marks = maths + science

    //printing the results on the console
     console.log('maths and science marks = ', (marks))
     
 }
 marks(70,80);//invoking the marks function

 //function
 function add(a,b) {
     var c=a+b
     return c
     
 }
 function avg(a)//This is an avarage function that calculates for the avarage of two numbers
  {
     let d = add(20,30)/a
     console.log(d)
     
 }
 
 avg(2)