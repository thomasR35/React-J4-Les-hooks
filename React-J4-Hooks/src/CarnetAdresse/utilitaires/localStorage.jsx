export const getContactsFromStorage = () => {
  const data = localStorage.getItem("contacts");
  return data ? JSON.parse(data) : [];
};

export const saveContactsToStorage = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};
