var _a;
// Handle the form submission
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var resumeData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        education: document.getElementById("education").value,
        experience: document.getElementById("experience").value,
        skills: document.getElementById("skills").value,
    };
    displayResume(resumeData);
});
// Function to display the resume
function displayResume(data) {
    var resumeContent = "\n        <h3>".concat(data.name, "</h3>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <h4>Education</h4>\n        <p>").concat(data.education, "</p>\n        <h4>Experience</h4>\n        <p>").concat(data.experience, "</p>\n        <h4>Skills</h4>\n        <p>").concat(data.skills, "</p>\n    ");
    document.getElementById("resumeContent").innerHTML = resumeContent;
}
