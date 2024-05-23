const oportunity = () => {  
    const user_id = localStorage.getItem("user_id");
    console.log(user_id)
    // document.getElementById("spinner").style.display = "block";
    
    fetch(`http://127.0.0.1:8000/opportunities/`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        if(data.length > 0){
            loadoportunity(data)
        }
    })
}

const loadoportunity = (opor) =>{
    console.log(opor)
    opor?.forEach(opo =>{
        console.log(opo)
        const parent = document.getElementById("joining")
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =`
        <img src="${opo?.image}" class="card__image" alt="brown couch" />
        <div class="card__content">
          <time datetime="2021-03-30" class="card__date">${opo?.organization}</time>
          <span class="card__title">${opo?.title}<span>
        </div>
        <h3>
        Requerment : ${opo?.required_skills}
    </h3>
    <p>
    ${opo?.description}
    </p>
    <h5>Location : Gaza / Palestin<h5>
        <div class="buttonforcard">
            <Button onclick="handleJoining(${opo?.id})">Join</Button> 
            <Button > Update </Button>
            <Button onclick="navigateToVolunteer(${opo?.id})"> Current Volunteer </Button>
        </div>
        `
        parent.appendChild(div)
    })

}

const navigateToVolunteer = (opportunityId) => {
    window.location.href = `Volunteer.html?opportunity_id=${opportunityId}`;
};



const handleJoining = (opportunityId) => {
    const cust = localStorage.user_id;
    if (!cust) {
        console.error("No user ID found in localStorage");
        return;
    }
    
    const info = {
        "status": "pending",
        "opportunity": opportunityId,
        "volunteer": cust
    };
    console.log("my user info", info);

    fetch("http://127.0.0.1:8000/volunteers/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (data) {
            Swal.fire({
                title: "Welcome",
                text: "Thanks for joining us",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "index.html";
                }
            });
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
};

// const heandelVolunteer = (oportunityId) => {
//     fetch(`http://127.0.0.1:8000/volunteers/?opportunity_id=${oportunityId}`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             if (data?.length > 0) {
//                 data.forEach(item => {
//                     console.log(item);
//                     showingvolinter(item?.volunteer, item?.status);
//                 });
//             }
//         })
//         .catch((error) => {
//             console.error('Error fetching volunteers:', error);
//         });
// };


// const showingvolinter = (volunteerId, volunteerstatus) =>{
//     console.log(volunteerId, volunteerstatus)

//     if(volunteerstatus === "confirmed"){
//         fetch(`http://127.0.0.1:8000/user/list/${volunteerId}`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             if(data.length > 0){
//                 loadvointear(data)
//             }
//         })
//     }
// }

// const loadvointear = (data) => {
//     const parent = document.getElementById("table-body");
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${data.id}</td>
//       <td>${data.first_name}</td>
//       <td>${data.email}</td>
//       <td>${data.username} tk</td>
//     `;
//     parent.appendChild(tr);
// }
oportunity();