    function createAccount() {

            let email = document.getElementById("email").value;
            let pword = document.getElementById("pword").value;

            if(/^[a-z0-9]+@gmail\.com$/.test(email)) {
                document.getElementById("output1").innerHTML = "successfully registered";
                localStorage.setItem("email", email.toLowerCase());
                localStorage.setItem("pword", pword);
            }
            else {
                document.getElementById("output1").innerHTML = "add @gmail";
            }
            
        }

        function checkUser(userInput) {
            let getUser = localStorage.getItem("email");
            if(userInput === getUser ) {
                return Promise.resolve(userInput);
            }
            else {
                return Promise.reject("user not found");
            }
        }

        function checkPword(username,pword) {
            let getPword = localStorage.getItem("pword");
            if(pword === getPword) {
                return Promise.resolve("successfully login " + username);
            }
            else {
                return Promise.reject("wrong password");
            }
        }

       async  function loginUser() {
           try {
            let emailInput = document.getElementById("logEmail").value;
            let pwordInput = document.getElementById("logPword").value;

            let chkUser = await checkUser(emailInput);
            let chkPword = await checkPword(chkUser,pwordInput);

            document.getElementById("output2").innerHTML = chkPword;

           } catch(err) {
            document.getElementById("output2").innerHTML = err;
           }


        }



        