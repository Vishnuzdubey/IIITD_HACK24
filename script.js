// CourseData - In Deployment - To be fetched using API
let courseData = [
    { title: "EduFlex", files: 25, video_id: "6iR5G-ilGUw", href: "#" },
    { title: "Smart Agro Advisor", files: 31, video_id: "sR01f71Kuag", href: "#" },
    { title: "Spend Smart", files: 29, video_id: "dP75Khfy4s4", href: "#" },
    { title: "CollabSphere", files: 9, video_id: "jb2AvF8XzII", href: "#" },
    { title: "Ihate2budget", files: 40, video_id: "ADJKbuayubE", href: "#" },
    { title: "Spotify Clone", files: 23, video_id: "1MTyCvS05V4", href: "#" }
];

function setLogAndRefresh() {
    localStorage.setItem('log', 'false');
    location.reload();
}

function createCourseCard(course) {
    return `
        <div class="ag-courses_item">
                <a href="/notefinal/video1.html" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                        ${course.title}
                    </div>

                    <div class="ag-courses-item_date-box">
                        Chapter:
                        <span class="ag-courses-item_date">
                            ${course.chapters}
                        </span>
                    </div>
                </a>
            </div>
    `;
}

function renderCourses() {
    const courseGrid = document.getElementById('courseGrid');
    courseGrid.innerHTML = courseData.map(createCourseCard).join('');
}

document.addEventListener('DOMContentLoaded', function() {


    // localStorage.setItem("log", false);
    // const courseGrid = document.getElementById('courseGrid');
    var openPopupBtn = document.getElementById("openPopupBtn");
    var popupBox = document.getElementById("popupBox");
    var closePopupBtn = document.getElementById("closePopupBtn");
    var logBtn = document.getElementById("log");
    var profile = document.getElementById("profilepic");
    const menuToggle = document.getElementById('menuToggle');
    const asideMenu = document.getElementById('asideMenu');



    openPopupBtn.addEventListener("click", function() {
        popupBox.style.display = "flex";
    });

    menuToggle.addEventListener('click', () => {
        asideMenu.classList.toggle('show');
    });

    console.log(localStorage.getItem("log"));

    if (localStorage.getItem("log") === 'true') {
        profile.style.display = "block";
        openPopupBtn.style.display = "none";
        renderCourses();
    }
    else {
        popupBox.style.display = "flex";
    }

    // login button funcitonality of changing button to profile pic icon

    logBtn.addEventListener("click", () => {

        localStorage.setItem("log", true);
        profile.style.display = "block";
        openPopupBtn.style.display = "none";

        // closing popup box as soon as user clicks on login button
        popupBox.style.display = "none";
        renderCourses();
        // courseGrid.style.display = "block";

    })

    closePopupBtn.addEventListener("click", function() {
        popupBox.style.display = "none";
    });
    // const createPlaylistLink = document.getElementById('createPlaylistLink');
    // const formPopup = document.getElementById('formPopup');
    // const overlay = document.getElementById('overlay');
    // const closePopup = document.getElementById('closePopup');

    // // Show form popup
    // createPlaylistLink.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     formPopup.style.display = 'block';
    //     overlay.style.display = 'block';
    // });

    // Close form popup
    closePopup.addEventListener('click', function() {
        formPopup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Handle form submission
    document.getElementById('createPlaylistForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Get form data
        const courseName = document.getElementById('courseName').value;
        const lectures = document.getElementById('lectures').value;

        courseData.push({
            title: courseName,
            chapters: lectures,
            href: "#"
        })
        // Add your code to handle the form data (e.g., save the playlist information)

        // Close the form popup
        formPopup.style.display = 'none';
        overlay.style.display = 'none';

        // Reset the form
        this.reset();
    });

    // Close the form when clicking outside of it

    window.addEventListener("click", function(event) {
        if (event.target == popupBox) {
            popupBox.style.display = "none";
        }
        if (event.target === overlay) {
            formPopup.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});

