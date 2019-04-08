var newacc;
var accountBook;
$(document).ready(function() {
  accountBook = new AccountBook();
  var planbook = [];
  var printer;
  accountBook.newid = 0;
  planbook[0] = new Plan(35, 1, "personal");
  planbook[1] = new Plan(20, 2, "business");
  planbook[2] = new Plan(10, 5, "corporate");
  $("#plans").append("<fieldset>");
  planbook.forEach(function(y){
  printer = "<input type='radio' name='plan' value='";
  printer += y.name + "'" + ">";
  printer += "</input>"+ y.name + "<br>";
  $("#plans").append(printer);
  console.log(y.name);
});
$("#plans").append("</fieldset>");
  testacc = new Account("Brian Pritt", 0, [], planbook[0]);
  accountBook[accountBook.newid] = testacc;
   $("#registerform").submit(function(){
     event.preventDefault();
     newacc = new Account($("#newname").val(),$("#initdeposit").val(),[$("#initdeposit").val()],planbook[0]);
     accountBook.newid++;
     console.log(accountBook.book);
     accountBook.book[accountBook.newid] = newacc;
     console.log(accountBook.book[accountBook.newid].name);
     printer = ""
     printer += "<option value='" + accountBook.newid;
     printer += "'>"+ accountBook.book[accountBook.newid].name +  "</option>";
     $("#accts").append(printer);
   });
   $("#DWform").submit(function(){
     event.preventDefault();
     accountBook.currid= $("#accts").val();

     $("#receiptheader").empty();
     $("#receipt").empty();
     console.log(accountBook.book[accountBook.currid]);
     ChangeMoney(accountBook.book[accountBook.currid], $("#withdraw").val(), $("#deposit").val());
     $("#receipt").append("<br> <br>Deposit:<br>" + $("#deposit").val() + "<br> Withdrawal: " + $("#withdraw").val() +"<br>" + accountBook.book[accountBook.currid].balance );
     $("#receiptheader").append( "<br>" +accountBook.book[accountBook.currid].name );
   });
});
function AccountBook(book, newid,currid){
this.book = [];
this.newid = newid;
this.plans = [];
this.curracc;
this.currid = currid;
}
function Plan(fee, interest,name){
this.interest = interest;
this.fee = fee;
this.name = name;
}

function Account(name, balance, history, plan){
this.name = name;
this.balance = balance;
this.history = [];
this.plan = plan;
}
function ChangeMoney(acc,withdrawal,deposit){

acc.balance = parseFloat(acc.balance) - parseFloat(withdrawal) + parseFloat(deposit);
if(acc.balance < 0){
  acc.balance -= acc.plan.fee;

}
acc.balance = parseFloat(acc.balance).toFixed(2);
}

function YearPass(rate, interest, balance){
interest = balance * rate;
}
