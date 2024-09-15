

// Listing Element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();
  
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById('name') as HTMLInputElement
    const emailElement = document.getElementById('email') as HTMLInputElement
    const  phoneElement = document.getElementById('phone') as HTMLInputElement
    const  educationElement = document.getElementById('education') as HTMLInputElement
    const  experienceElement = document.getElementById('experience') as HTMLInputElement
    const  skillsElement = document.getElementById('skills') as HTMLInputElement
  
  
  
  
  
  
    const usernameElement = document.getElementById(
      "username"
    )as HTMLInputElement
     
  
  
  
  
  
  
     if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement&&usernameElement){
  
     const name = nameElement.value
     const email = emailElement.value
     const phone = phoneElement.value
     const education = educationElement.value
     const experience = experienceElement.value
     const skills = skillsElement.value
     const username = usernameElement.value
     const uniquePath = `resume/${username.replace(/\s+/g,'_')}_cv.html `
     
  
  
  // Profile Picture Element
      const profilePictureFile = profilePictureInput.files?.[0]
      const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): ""
  
  
  
  
  
  
    const resumeOutput = `
    
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
    <h2>${name}</h2>
    <hr>
    <h3>Personal Information </h3>
    <hr>
    <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</span></p>
    <p><strong>Phone:</strong><span id="edit-phone" class="editable">${phone}</span></p>
    <hr>
    <h3>Education</h3>
    <hr>
    <p id="edit-education" class="editable">${education}</p>
    <hr>
    <h3>Experience</h3>
    <hr>
    <p id="edit-experience" class="editable">${experience}</p>
    <hr>
    <h3>Skills</h3>
    <hr>
    <p id="edit-skills" class="editable">${skills}</p>
  `;
  
    
  
  
  
  const downloadLink = document.createElement('a')
  downloadLink.href =  'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
  downloadLink.download = uniquePath;
  downloadLink.textContent = 'DownLoad Your Resume'
  
  
   
   const resumeOutputElement = document.getElementById('resumeOutput')
    if(resumeOutputElement){
      resumeOutputElement.innerHTML = resumeOutput
    makesEditable();
  
   resumeOutputElement.appendChild(downloadLink)
  
  
    resumeOutputElement.style.display='block'
    }
     }else{
      console.error('One or more output Elements are missing');
      
     }
  })
  
  
  function makesEditable(){
    const editableElements= document.querySelectorAll('.editable')
      editableElements.forEach(element =>(
        element.addEventListener('click',function(){
          const currentElement = element as HTMLElement;
          const currentValue = currentElement.textContent || "";
  
  
  
          if(currentElement.tagName === "p" || currentElement.tagName === "SPAN"){
            const input = document.createElement('input')
            input.type = 'text'
            input.value= currentValue
            input.classList.add('editing-input')
  
  
  
            input.addEventListener('blur',function(){
              currentElement.textContent = input.value;
              currentElement.style.display = 'inline'
              input.remove()
            })
            currentElement.style.display = 'none'
            currentElement.parentNode?.insertBefore(input,currentElement) 
            input.focus()
  
          }
  
        })
      ))
  }