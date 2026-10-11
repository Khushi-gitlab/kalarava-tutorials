function showMessage(className) {

    const modal = document.getElementById("courseModal");
    const title = document.getElementById("modalTitle");
    const content = document.getElementById("modalContent");

    title.innerText = className;

    if (className === "10th Class Regular Tuition") {

        content.innerHTML = `
            <h4>CBSE | State</h4>

            <h3>📚 Subjects</h3>
            <ul>
                <li>Mathematics</li>
                <li>Science</li>
                <li>English</li>
                <li>Language & Grammar</li>
            </ul>

            <h3>🕐 Class Schedule</h3>
            <p>Morning & Evening Classes</p>

            <h3>📅 2026–27 Batch</h3>
            <p>Classes start from <strong>26th April 2026</strong>.</p>
        `;

    }

    else if (className === "1st to 9th Class Regular Tuition") {

        content.innerHTML = `
            <h4>CBSE | State</h4>

            <h3>📚 Academic Learning</h3>
            <ul>
                <li>All Subject Classes</li>
                <li>Theory + Activity Based Learning</li>
                <li>Regular Student Development Activities</li>
                <li>Parent Meetings</li>
            </ul>

            <h3>🎯 Learning Approach</h3>
            <p>
                The program combines academic subject classes with
                activity-based learning and student development activities.
            </p>

            <h3>📅 2026–27 Batch</h3>
            <p>Classes start from <strong>25th May 2026</strong>.</p>
        `;

    }

    else if (className === "Competitive Exam Coaching") {

        content.innerHTML = `
            <h4>Navodaya | Sainik | Murarji</h4>

            <h3>🎯 Coaching Programs</h3>
            <ul>
                <li>Navodaya Exam Coaching</li>
                <li>Sainik Exam Coaching</li>
                <li>Murarji Exam Coaching</li>
            </ul>

            <h3>💻 Learning Mode</h3>
            <p>Both Online & Offline Classes</p>

            <h3>📝 Student Support</h3>
            <ul>
                <li>Weekly Tests & Exams</li>
                <li>Individual Student Attention</li>
                <li>Hostel Available</li>
            </ul>

            <h3>📅 2026–27 Batch</h3>
            <p>Classes start from <strong>1st May 2026</strong>.</p>
        `;

    }
	
	
	else if (className === "NMMS Scholarship Exam Coaching") {

	    content.innerHTML = `
	        <h4>NMMS Scholarship Exam Coaching</h4>

	        <h3>🎓 Exam Preparation</h3>
	        <ul>
	            <li>National Means-cum-Merit Scholarship examination preparation</li>
	            <li>Mental Ability Test (MAT)</li>
	            <li>Scholastic Aptitude Test (SAT)</li>
	        </ul>

	        <h3>📚 Student Support</h3>
	        <ul>
	            <li>Regular practice sessions</li>
	            <li>Model examinations</li>
	            <li>Individual student guidance</li>
	        </ul>

	        <h3>📝 Batch Information</h3>
	        <p>Please contact Kalarava Tutorials for batch details.</p>
	    `;
	}
	

	/* CLOSE MENU AFTER CLICKING A LINK */
	if (menuToggle && navigation) {
	    navigation.querySelectorAll("a").forEach(function (link) {
	        link.addEventListener("click", function () {
	            navigation.style.display = "none";
	            menuToggle.textContent = "☰";
	            menuToggle.setAttribute("aria-expanded", "false");
	        });
	    });
	}




    else if (className === "SSLC Repeat Student Support") {

        content.innerHTML = `
            <h4>All Subjects</h4>

            <h3>📚 Academic Support</h3>
            <ul>
                <li>All Subject Preparation</li>
                <li>Additional Academic Support</li>
                <li>Exam-Oriented Preparation</li>
            </ul>

            <h3>🎯 Support Program</h3>
            <p>
                A program for students who need additional preparation
                after their SSLC results.
            </p>

            <h3>📅 Batch Information</h3>
            <p>Classes start from <strong>25th April 2026</strong>.</p>
        `;
    }

    modal.style.display = "flex";
}


function closeModal() {
    document.getElementById("courseModal").style.display = "none";
}


async function submitForm(event) {

    event.preventDefault();

    const form = event.target;

    const enquiry = {
        studentName: form.studentName.value,
        parentName: form.parentName.value,
        phone: form.phone.value,
        program: form.program.value,
        message: form.message.value
    };

    try {

        const response = await fetch("http://localhost:8080/api/enquiries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(enquiry)
        });

        if (response.ok) {

            alert(
                "Thank you for your enquiry!\n\n" +
                "Kalarava Tutorials will contact you soon."
            );

            form.reset();

        } else {

            alert("Something went wrong. Please try again.");

        }

    } catch (error) {

        console.error(error);

        alert(
            "Unable to connect to the Kalarava server.\n\n" +
            "Please try again later."
        );
    }
}



 // MOBILE HAMBURGER MENU
const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector("nav");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navigation.style.display === "flex";

        navigation.style.display = isOpen ? "none" : "flex";
        menuToggle.textContent = isOpen ? "☰" : "×";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 900) {
                navigation.style.display = "none";
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    });
}
