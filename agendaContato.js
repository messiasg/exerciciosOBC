function addContact() {
  const addContact = document.getElementById("contacts");

  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  const ul = document.createElement("ul");
  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  const nameInput = document.createElement("input");
  nameInput.type = Text;
  nameInput.name = "full text";

  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);

  const telephoneNumber = document.createElement("li");
  telephoneNumber.innerText = "Telefone: ";
  const telephoneInput = document.createElement("input");
  telephoneInput.type = Text;
  telephoneInput.name = "full telephone number";

  telephoneNumber.appendChild(telephoneInput);
  ul.appendChild(telephoneNumber);

  const emailAdress = document.createElement("li");
  emailAdress.innerText = "Endereço de e-mail: ";
  const emailInput = document.createElement("input");
  emailInput.type = Text;
  emailInput.name = "E-mail adress";

  emailAdress.appendChild(emailInput);
  ul.appendChild(emailAdress);

  addContact.append(h3, ul);
}

function removeContact() {
  const addContact = document.getElementById("contacts");
  const removeTitle = document.getElementsByTagName('h3')
  const removeInfo = document.getElementsByTagName('ul')

  addContact.removeChild(removeTitle[removeTitle.length-1])
  addContact.removeChild(removeInfo[removeInfo.length-1])
}
