let date = new Date();
let yearPos = document.getElementById("getYear");
let currYear=date.getFullYear();
yearPos.innerHTML=currYear;


let personData = [];

let jsDOM = {

   

          data:{
            fname: document.getElementById('fname'),
            lname: document.getElementById('lname'),
            email: document.getElementById('email'),
            phone: document.getElementById('pn'),
            city: document.getElementById('city'),
            message: document.getElementById('message'),
          },  
 
            submit: document.getElementById('submit'),
            addData:document.getElementById('add_data'),
    
    
            personData: document.getElementById('personData')
         

    
  

}

let jsFunc = {
    myFunction: () => {
        jsDOM.fnameoutput.innerHTML = `Firstname: ${jsDOM.fname.value}`,
        jsDOM.lnameoutput.innerHTML = `Lastname: ${jsDOM.lname.value}`,
        jsDOM.emailoutput.innerHTML = `Email: ${jsDOM.email.value}`,
        jsDOM.pnoutput.innerHTML = `Phone Number: ${jsDOM.phone.value}`,
        jsDOM.cityoutput.innerHTML = `City: ${jsDOM.city.value}`
        
    },showData: () => {
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';

        let node = document.createElement("div");
        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);

        let fullname, email, phone, city, message;

        personData.forEach(x => {
            fullname = `${x.firstname} ${x.lastname}`, email = x.email, phone = x.phone, city = x.city, message = x.message;
            let personData = document.createElement('p');
            let personDataText = document.createTextNode(`Name: ${fullname}

            Email:${email}\u00A0\u00A0\u00A0\u00A0
            Phone Number:${phone}\u00A0\u00A0\u00A0\u00A0
            \u00A0City:${city}\u00A0\u00A0\u00A0\u00A0
            Message:${message}`);

            personData.appendChild(personDataText);
            node.appendChild(personData);
        })
        parentDiv.appendChild(node);


},
        addData: () => {
            personData.push({ 
                firstname: jsDOM.data.fname.value, 
                lastname: jsDOM.data.lname.value, 
                email: jsDOM.data.email.value,  
                phone: jsDOM.data.phone.value, 
                city: jsDOM.data.city.value, 
                message: jsDOM.data.message.value });
            jsFunc.clearFields(); 
        },

        clearFields: () => {
            jsDOM.data.fname.value = "";
            jsDOM.data.lname.value = "";
            jsDOM.data.email.value = "";
            jsDOM.data.phone.value = "";
            jsDOM.data.city.value = "";
            jsDOM.data.message.value = "";

        }
}

jsDOM.addData.addEventListener('click', jsFunc.addData);
jsDOM.submit.addEventListener('click', jsFunc.showData);





