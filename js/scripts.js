$(document).ready(function() {
    testacc = new Account(Brian Pritt, 0)
   // Stuff to do as soon as the DOM is ready
   $("#registerform").submit(function(){
     event.preventDefault();
   });
   $("#DWform").submit(function(){
     event.preventDefault();
     $("#receipt").html();
     $("#receipt").append("asdfgasdgasd");

   });
});
function AccountBook(book, id){
this.book = [];
this.curid = id;

}
function Account(name, balance, history, rate)
{
this.name = name;
this.balance = balance;
this.history = [];
this.rate = rate;
}
function AddMoney(acc,withdrawal,deposit)
{

acc.balance += withdrawal + deposit;

}

function YearPass(rate, interest, balance){
interest = balance * rate;
}
