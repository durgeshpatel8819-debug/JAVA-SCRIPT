//make variable private

function createBankAccount(){
let balance =500
const user={
    
    deposite:function(amount){
        if(typeof amount=="number"&& amount>0){
        balance+=amount;
    return balance
    }

},
   withdraw : function(amount){
        if(typeof amount=="number"&& amount>0 && balance>=amount){
        balance-=amount;
    return balance
        }
    },
    getBalance : function(){
        return balance;
    }
}
return user;
}
const customer = createBankAccount();
console.log(customer.deposite(200));




