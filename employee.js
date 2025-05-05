
    let currentRow = null;

    function deleteRow(button) {
      const row = button.closest("tr");
      row.remove();
    }

    function editRow(button) {
      currentRow = button.closest("tr");
      document.getElementById("editId").value = currentRow.cells[0].textContent;
      document.getElementById("editName").value = currentRow.cells[1].textContent;
      document.getElementById("editEmail").value = currentRow.cells[2].textContent;
      document.getElementById("editDepartment").value = currentRow.cells[3].textContent;
      document.getElementById("editDate").value = currentRow.cells[4].textContent;



const gender = currentRow.cells[5].textContent.trim();
if (gender === "Male") {
  document.getElementById("genderMale").checked = true;
} else if (gender === "Female") {
  document.getElementById("genderFemale").checked = true;
}


      document.getElementById("editType").value = currentRow.cells[6].textContent;
      document.getElementById("editForm").style.display = "block";
    }

    function saveEdit() {
      if (currentRow) {
        currentRow.cells[1].textContent = document.getElementById("editName").value;
        currentRow.cells[2].textContent = document.getElementById("editEmail").value;
        currentRow.cells[3].textContent = document.getElementById("editDepartment").value;
        currentRow.cells[4].textContent = document.getElementById("editDate").value;
    
        const selectedGender = document.querySelector('input[name="editGender"]:checked');
        currentRow.cells[5].textContent = selectedGender ? selectedGender.value : "";
    
        currentRow.cells[6].textContent = document.getElementById("editType").value;
    
        document.getElementById("editForm").style.display = "none";
        currentRow = null;
      }
    }
    

    function cancelEdit() {
      document.getElementById("editForm").style.display = "none";
      currentRow = null;
    }
  
  
  
  