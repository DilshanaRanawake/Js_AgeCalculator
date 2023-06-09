function calculateAge() {
    let dob = document.getElementById("dob").value;
    let dobDate = new Date(dob);
    let todayDate = new Date();
    let age = todayDate.getFullYear() - dobDate.getFullYear();

    // Check if the birthday has occurred this year
    if (todayDate.getMonth() < dobDate.getMonth() ||
        (todayDate.getMonth() === dobDate.getMonth() && todayDate.getDate() < dobDate.getDate())) {
        age--;
    }

    document.getElementById("result").value = "Your age is: " + age;
} 