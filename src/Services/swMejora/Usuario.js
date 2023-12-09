const base_url = "http://localhost:5000/user";
const user =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJqdXBhIiwiaWF0IjoxNzAyMDcxMDEyLCJleHAiOjE3MDIwNzQ2MTJ9.gzHfr6uCWJjBIYvlzOhV3G7XhxWhGhPwnpBV6fkSntM";
const fetchUsuario = async () => {  
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

const fetchUsuarioSave = async (form, metodo) => {  
  const newurl = metodo==="POST"? base_url:base_url+`/${form.id}`
  delete form.id;
  console.log(newurl);
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

const fetchUsuarioDel = async (form) => {  
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


export { fetchUsuario, fetchUsuarioSave, fetchUsuarioDel };
