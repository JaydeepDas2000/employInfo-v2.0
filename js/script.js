const employeeList = []
function onFormSubmit(){

    // validation
    /* var errorMessage = '';

    if(document.getElementById('empName').value == ""){
        errorMessage += 'Enter your name \n';
    }
    if(document.getElementById('empID').value == ""){
        errorMessage += 'Enter your ID \n';
    }
    if(document.getElementById('officeEmail').value == ""){
        errorMessage += 'Enter your office email \n';
    }
    if(document.getElementById('personalEmail').value == ""){
        errorMessage += 'Enter your personal email \n';
    }
    if(document.getElementById('bio').value == ""){
        errorMessage += 'Enter your Bio \n';
    } */

    let errorMessage = validation()

    /*var formData = {};
    var enrollmentForm = document.getElementById('enrollmentForm');
    formData["empName"] = enrollmentForm.elements['empName'].value;
    console.log(fromData);*/

    if(errorMessage != ""){
        alert(errorMessage);
        return false;
    }

    // Enrolled
    let formData = readFormData();
    renderRow(formData);
    // //employeeList.push(formData)
    // //render()
    // console.log(formData);
    //insertNewRecord(formData);
}

function validation(){
    let errorMessage = '';

    if(document.getElementById('empName').value == ""){
        errorMessage += 'Enter your name \n';
    }
    if(document.getElementById('empID').value == ""){
        errorMessage += 'Enter your ID \n';
    }
    if(document.getElementById('officeEmail').value == ""){
        errorMessage += 'Enter your office email \n';
    }
    if(document.getElementById('personalEmail').value == ""){
        errorMessage += 'Enter your personal email \n';
    }
    if(document.getElementById('bio').value == ""){
        errorMessage += 'Enter your Bio \n';
    }

    return errorMessage;
}

function render() {
    const placeholder = document.getElementById('dtl-placeholder');
    placeholder.innerHTML = ''
    employeeList.forEach((item) => {
        renderRow(item)
    })
    bindEvents()
}

function readFormData(){
    let formData = {};
    let enrollmentForm = document.getElementById('enrollmentForm');
    formData["empName"] = enrollmentForm.elements['empName'].value;
    formData["empID"] = enrollmentForm.elements['empID'].value;
    formData["officeEmail"] = enrollmentForm.elements['officeEmail'].value;
    formData["personalEmail"] = enrollmentForm.elements['personalEmail'].value;
    formData["gender"] = enrollmentForm.elements['gender'].value;
    formData["role"] = enrollmentForm.elements['role'].value;
    formData["profilePicture"] = enrollmentForm.elements['profilePicture'].value;
    formData["bio"] = enrollmentForm.elements['bio'].value;
    if(formData["profilePicture"] == ""){
        formData["profilePicture"] = "assets/user.png";
    }
    return formData;
}

function bindEvents() {
    const deleteElements = Array.from(document.querySelectorAll(".deleteBtn"))
    deleteElements.forEach((ele)=>{
        ele.addEventListener('click', (e) => {
            const index = deleteElements.indexOf(e.target)
            let flag = onDeleteRow(index);
            console.log(flag);
            // console.log(index)
            //deleteFlag = 
        })
    })
}

function renderRow(data){
    console.log(data);
    let placeholder = document.getElementById('dtl-placeholder');

    placeholder.innerHTML += `
        <tr>
            <td>
                <div>
                    <strong>${data.empName}</strong>
                </div>
                <div>
                    ${data.role}
                </div>
                <div>
                    Emp ID : ${data.empID}
                </div>
                <div>
                    <button type="button" class="btn btn-warning mt-3 editBtn">Edit</button>
                    <button type="button" class="btn btn-danger mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                    <button type="button" class="btn btn-outline-primary mt-3 viewBtn">View</button>
                </div>
            </td>
            <td>
                <center><img src="${data.profilePicture}" style="max-width: 128px; max-height: 128px"/></center>
            </td>
        </tr>

    `;
    
    /* var messageView = document.getElementById('messageView');
    messageView.innerHTML += `
        <div><strong>${data.empName}</strong></div>
        <div>
            ${data.role}
        </div>
        <div>
            Emp ID : ${data.empID}
        </div>
        <div>
            Gender : ${data.gender}
        </div>
        <div>
            Office mail : ${data.officeEmail}
        </div>
        <div>
            Personal mail : ${data.personalEmail}
        </div>
        <div>
            Bio : ${data.bio}
        </div>
    ` */


}
/*Main functions*/
function onDeleteRow(e) {    

    /* modelDelete.style.display='block';
    
    const modelDeleteBtn = document.getElementById("modelDeleteBtn").value;
    return modelDeleteBtn; */

    /* if(e.target.classList.contains("deleteBtn")){
    } */

    if(!e.target.classList.contains("deleteBtn")){
        return
    }
    const deleteModelBtn = e.target;
    deleteModelBtn.closest('tr').remove();
}

/* function openModelDelete(){
    modelDelete.style.display='block';
}*/
/* delete function */
/* function closeModelDeleteBtn(){
    modelDelete.style.display='none';
} */

/* view function */
/* function closeModelViewBtn(){
    modelView.style.display='none';
} */

/* function clickOutside(e){
    if(e.target == modelDelete){
        modelDelete.style.display='none';
    }
    if(e.target == modelView){
        modelView.style.display='none';
    }
} */
/* function deleteEmp(){
    const deleteBtn = e.target;
    deleteBtn.closest('tr').remove();
} */
let tableEl = document.getElementById('empList');
tableEl.addEventListener('click',onDeleteRow);

/* delete */
/* var modelDelete = document.getElementById('modelDelete');*/
/* let closeBtnDelete = document.getElementById('closeBtnDelete'); */
/* var deleteBtn = document.getElementById('deleteBtn'); */

/* deleteBtn.addEventListener('click', openModelDelete); */
/* closeBtnDelete.addEventListener('click', closeModelDeleteBtn); */

/* view */
/* let closeBtnView = document.getElementById('closeBtnView');
closeBtnView.addEventListener('click', closeModelViewBtn);


window.addEventListener('click', clickOutside); */