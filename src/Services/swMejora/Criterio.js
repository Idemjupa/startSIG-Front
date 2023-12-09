const base_url = "http://localhost:5000/criterios";
const user =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJqdXBhIiwiaWF0IjoxNzAyMDc5OTE5LCJleHAiOjE3MDIwODM1MTl9.ZWv2QBTsdvCUPlGqKxpLOIqqVYecOpkh-GXao6nqvBc";
const fetchCriterio = async () => {
  //  JSON.parse(localStorage.getItem("auth"))
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "Application/Json",
      authorization: `bearer ${user}`,
    },
  };
  const response = await fetch(base_url, option);
  const data = await response.json();
  return data;
};

const fetchCriterioSave = async (form, metodo) => {  
  const newurl = metodo==="POST"? base_url:base_url+`/${form.id}`
  delete form.id;
  console.log(metodo);
  const option = {
    method: metodo,
    headers: {
      "Content-Type": "Application/Json",
      "authorization": `bearer ${user}`,
    },
    body: JSON.stringify(form),
  };
  const response = await fetch(newurl, option);
  const data = await response.json();
  return data;
};

const fetchCriterioDel = async (form) => {  
  const newurl = base_url+`/${form.id}`  
  const option = {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/Json",
      "authorization": `bearer ${user}`,
    }
  };
  const response = await fetch(newurl, option);
  const data = await response.json();
  return data;
};


export { fetchCriterio, fetchCriterioSave, fetchCriterioDel };
