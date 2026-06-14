
       let attemps = 3;
       let pinNo = "1234";
       let balance = 0;
       let isLocked = false;

        function checkPin() {
           // attemps++
           
           if(isLocked == true) {
            document.getElementById("output2").innerHTML = "System is locked. please wait";
            return;
           }
           else {
            attemps--;
           }

            let pin = document.getElementById("pin").value;

            
            if(pin === pinNo) {
                document.getElementById("output").innerHTML =
                `<button onclick="checkBalance()">Check Balance</button>
                <br>
                
                <input id="amountOfWithdraw"><br>
                <button onclick="withdraw()">WithDraw</button><br>
                
                <input id="amountOfDeposit"><br>
                <button onclick="deposit()">Deposit</button>`;


            }
            else if (attemps === 0) {
                isLocked = true;
                document.getElementById("output").innerHTML = "locked wait 3 seconds";
                setTimeout(function sec(){
                     isLocked = false;
                    attemps = 3;
                },3000)

            }
            else {
                if(attemps > 0) {
                document.getElementById("output").innerHTML = "wrong pin you only have " + attemps + " attemps";
                }
            }
            
        }


        function checkBalance() {
            document.getElementById("output2").innerHTML = balance;
        }


        function deposit() {
            let amountOfDeposit = parseFloat(document.getElementById("amountOfDeposit").value);

            if(/^[0-9.]+$/.test(amountOfDeposit)){
            balance += amountOfDeposit;
            document.getElementById("output2").innerHTML = "successfull deposit amount " + balance;
        }
            else{
                document.getElementById("output2").innerHTML = "invalid";
            }

        }

         
        function withdraw() {
            let amountOfWithdraw = parseFloat(document.getElementById("amountOfWithdraw").value);

            if(/^[0-9.]+$/.test(amountOfWithdraw)) {
                if(amountOfWithdraw <= balance){
                balance -= amountOfWithdraw;
                document.getElementById("output2").innerHTML = "successfully withdraw amount " ;
                }
                else {
                    document.getElementById("output2").innerHTML = "not enought balance";
                }
            }
            else {
                document.getElementById("output2").innerHTML = "invalid";}
        }
        