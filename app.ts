// Define the interface for the resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

// Handle the form submission
document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const resumeData: ResumeData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        education: (document.getElementById("education") as HTMLTextAreaElement).value,
        experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
        skills: (document.getElementById("skills") as HTMLTextAreaElement).value,
    };

    displayResume(resumeData);
});
// Function to display the resume
function displayResume(data: ResumeData) {
    const resumeContent = `
        <h3>${data.name}</h3>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h4>Education</h4>
        <p>${data.education}</p>
        <h4>Experience</h4>
        <p>${data.experience}</p>
        <h4>Skills</h4>
        <p>${data.skills}</p>
    `;

    document.getElementById("resumeContent")!.innerHTML = resumeContent;
}
