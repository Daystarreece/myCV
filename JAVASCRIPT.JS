const inputfield = document.querySelector('.input-field')
const output = document.querySelector('.output')

let inputshow = true

async function TextEditor(element){
    const newEditor = await classicEditor
.create(element,{
        toolbar: ['heading', 'bold', 'italic', 'underline', 'bulletedList','numberedList', 'blockQuote'],
})
return newEditor
   
}
let workExpdetails;
TextEditor(inputfield ["WORKEXP"]).then(nEditor=>{
    workExpdetails=nEditor
})
let ACADEMIC;
TextEditor(inputfield ["ACADEMIC"]).then(nEditor=>{
    ACADEMIC =nEditor
})
function toggle(){
if (inputshow){
    inputfield.style.display = "none"
    inputshow = false
    output.innerHTML = `
    <div class="herro">
    <h1>${inputfield["NAME"].value}</h1>
    <h3>${inputfield["TITLE"]}</h3>
    </div>
   <div class="main">
   <div>
   <h2> OBJECTIVE</h2>
    <p>${inputfield["OBJECTIVE"].value}</p>
    <h2> SKILLS</h2.
    <P>${inputfield["SKILLS"].value}</p>
    <h2> ACHIEVMENTS</h2> 
    <p>${inputfield["ACHIEVMENTS"].VALUE}</P>
     <h2> CONTACT</H2>
     <p>${inputfield["CONTACT"].value}</p>
     </div>
     <div>
     <h2> workExperience </h2>
     ${workExpdetails.getData()}
     <h2> ACADEMIC </h2>
     ${ACADEMIC.getData()}
     </div>
     </div>


     <div class="btn">
     <button onclick="print(/button)>"
     </div>`
    
}  else{
     inputfield.style.display= "block"
     inputshow=true
     output.innerHTML=""
}  
}
