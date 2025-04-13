document.addEventListener("DOMContentLoaded", function () {
    // Navigation text click events
    document.querySelectorAll(".text").forEach(item => {
        item.addEventListener("click", function () {
            let sectionText = this.textContent.trim().toLowerCase().replace(" ", "");
            scrollToSection(sectionText);
        });
    });

    // Scroll to section function
    function scrollToSection(section) {
        let sectionMap = {
            "home": "page1",
            "album": "page2",
            "booknow": "page4"
        };
        
        let target = document.getElementById(sectionMap[section]);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    // Contact form validation
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            validateForm();
        });
    }

    // form sublit 

    document.getElementById("contact-form").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission
    
        let formData = new FormData(this);
        formData.append("subject", "Message from Namita Decorators");
        formData.append("from_name", "Namita Decorators");
    
        let response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        
        
        let result = await response.json();
        console.log(result);
    
        if (result.success) {
            window.location.href = "thanks.html"; // Redirect after successful submission
            this.reset(); // Reset form after submission
        } else {
            alert("Error sending email. Check your API key!");
        }
    });
    
   
});
