var _a;
// Listing Element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html ");
        // Profile Picture Element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n    \n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n    <h2>").concat(name_1, "</h2>\n    <hr>\n    <h3>Personal Information </h3>\n    <hr>\n    <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n    <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n    <hr>\n    <h3>Education</h3>\n    <hr>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n    <hr>\n    <h3>Experience</h3>\n    <hr>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    <hr>\n    <h3>Skills</h3>\n    <hr>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n  ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'DownLoad Your Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makesEditable();
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = 'block';
        }
    }
    else {
        console.error('One or more output Elements are missing');
    }
});
function makesEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) { return (element.addEventListener('click', function () {
        var _a;
        var currentElement = element;
        var currentValue = currentElement.textContent || "";
        if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
            var input_1 = document.createElement('input');
            input_1.type = 'text';
            input_1.value = currentValue;
            input_1.classList.add('editing-input');
            input_1.addEventListener('blur', function () {
                currentElement.textContent = input_1.value;
                currentElement.style.display = 'inline';
                input_1.remove();
            });
            currentElement.style.display = 'none';
            (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
            input_1.focus();
        }
    })); });
}
