function createContact(prenom, nom, email, telephone, fonction) {
  return `<ul class="dashboard-nav dashboard-list" id="dashboardList">
  <li><a href="#" class="link_active">${prenom} ${nom}</a></li>
   <li><a href="#" class="link_active">${email}</a></li>
   <li><a href="#" class="link_active">${telephone}</a></li>
   <li><a href="#" class="link_active">${fonction}</a></li>
   </ul>`;
}

registerContactOpen.addEventListener("click", () => {
  dashboardNavBlock.style.display = "none";
  entries.style.display = "block";
});

btnAddContact.addEventListener("click", () => {
  if (
    prenom.value == "" ||
    nom.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    fonction.value == ""
  ) {
    return;
  } else {
    const contact = createContact(
      prenom.value,
      nom.value,
      email.value,
      phone.value,
      fonction.value
    );

    dashboardNavBlock.innerHTML += contact;
    prenom.value = "";
    nom.value = "";
    email.value = "";
    phone.value = "";
    fonction.value = "";

    dashboardNavBlock.style.display = "block";
    entries.style.display = "none";
  }
});
