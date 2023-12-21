const form=document.querySelector("form");
form.addEventListener('submit',(e)=>{
e.preventDefault();
const formData=new FormData(form);
axios.post('http://localhost:8000/predict',formData)
.then(res=> console.log(res))
.catch(err => console.log(err))
});