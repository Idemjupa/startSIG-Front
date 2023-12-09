const base_url = "http://localhost:5000/nivelhallazgo";
const user =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9naW4iOiJwZWRybyIsImlhdCI6MTcwMjAxMjIzOSwiZXhwIjoxNzAyMDE1ODM5fQ.oeD-Sc5TG1jT1TZC8ag1AKTyVKqxHB9kaBRYZvwNb-Q";
const fetchNivelHallazgo = async () => {  
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "Application/Json",
      "authorization": `bearer ${user}`,
    },
  };
  const response = await fetch(base_url, option);
  const data = await response.json();  
  return data;
};

const fetchNivelHallazgoSave = async (form, metodo) => {  
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

const fetchNivelHallazgoDel = async (form) => {  
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


export { fetchNivelHallazgo, fetchNivelHallazgoSave, fetchNivelHallazgoDel };
