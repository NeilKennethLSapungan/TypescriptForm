var personData = [];

var jsDOM = {
  data: {
    fname: document.getElementById("fname")! as HTMLInputElement,
    lname: document.getElementById("lname")! as HTMLInputElement,
    email: document.getElementById("email")! as HTMLInputElement,
    phone: document.getElementById("pn")! as HTMLInputElement,
    city: document.getElementById("city")! as HTMLInputElement,
    message: document.getElementById("message")! as HTMLInputElement
  },

  submit: document.getElementById("submit"),
  addData: document.getElementById("add_data"),

  personData: document.getElementById("personData")
};

var jsFunc = {
  showData: () => {
    let parentDiv = jsDOM.personData;
    parentDiv.innerHTML = "";

    let node = document.createElement("div");
    let nodeHeader = document.createElement("h3");
    let nodeHeaderText = document.createTextNode("Person Data");
    nodeHeader.appendChild(nodeHeaderText);

    let fullname, email, phone, city, message;

    personData.forEach(x => {
      (fullname = `${x.firstname} ${x.lastname}`),
        (email = x.email),
        (phone = x.phone),
        (city = x.city),
        (message = x.message);
      var br = document.createElement("br");

      let personData = document.createElement("p");
      let personDataText = document.createTextNode(`Name: ${fullname}`);
      personData.appendChild(personDataText);
      node.appendChild(personData);

      personData = document.createElement("p");
      personDataText = document.createTextNode(`Email: ${email}`);
      personData.appendChild(personDataText);
      node.appendChild(personData);

      personData = document.createElement("p");
      personDataText = document.createTextNode(`Phone Number: ${phone}`);
      personData.appendChild(personDataText);
      node.appendChild(personData);

      personData = document.createElement("p");
      personDataText = document.createTextNode(`City: ${city}`);
      personData.appendChild(personDataText);
      node.appendChild(personData);

      personData = document.createElement("p");
      personDataText = document.createTextNode(`Message: ${message}`);
      personData.appendChild(personDataText);
      node.appendChild(personData);
      node.appendChild(br);
    });
    parentDiv.appendChild(node);
  },
  addData: () => {
    personData.push({
      firstname: jsDOM.data.fname.value,
      lastname: jsDOM.data.lname.value,
      email: jsDOM.data.email.value,
      phone: jsDOM.data.phone.value,
      city: jsDOM.data.city.value,
      message: jsDOM.data.message.value
    });
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
};

jsDOM.addData.addEventListener("click", jsFunc.addData);
jsDOM.submit.addEventListener("click", jsFunc.showData);
