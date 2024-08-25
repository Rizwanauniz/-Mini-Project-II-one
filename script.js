// Get all the elements  
const patientForm = document.getElementById('patient-form');  
const doctorForm = document.getElementById('doctor-form');  
const appointmentForm = document.getElementById('appointment-form');  
const medicationForm = document.getElementById('medication-form');  
const patientList = document.getElementById('patient-list');  
const doctorList = document.getElementById('doctor-list');  
const appointmentList = document.getElementById('appointment-list');  
const medicationList = document.getElementById('medication-list');  
  
// Patient form submission  
patientForm.addEventListener('submit', (e) => {  
   e.preventDefault();  
   const name = document.getElementById('name').value;  
   const contactDetails = document.getElementById('contactDetails').value;  
   const medicalHistory = document.getElementById('medicalHistory').value;  
   // Send a POST request to the server to register a new patient  
   fetch('/api/patients', {  
      method: 'POST',  
      headers: {  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({ name, contactDetails, medicalHistory })  
   })  
  .then(response => response.json())  
  .then(data => {  
      console.log(data);  
      // Add the new patient to the patient list  
      const patientListItem = document.createElement('li');  
      patientListItem.textContent = `${data.name} - ${data.contactDetails}`;  
      patientList.appendChild(patientListItem);  
   })  
  .catch(error => console.error(error));  
});  
  
// Doctor form submission  
doctorForm.addEventListener('submit', (e) => {  
   e.preventDefault();  
   const name = document.getElementById('name').value;  
   const specialization = document.getElementById('specialization').value;  
   // Send a POST request to the server to register a new doctor  
   fetch('/api/doctors', {  
      method: 'POST',  
      headers: {  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({ name, specialization })  
   })  
  .then(response => response.json())  
  .then(data => {  
      console.log(data);  
      // Add the new doctor to the doctor list  
      const doctorListItem = document.createElement('li');  
      doctorListItem.textContent = `${data.name} - ${data.specialization}`;  
      doctorList.appendChild(doctorListItem);  
   })  
  .catch(error => console.error(error));  
});  
  
// Appointment form submission  
appointmentForm.addEventListener('submit', (e) => {  
   e.preventDefault();  
   const patientId = document.getElementById('patient').value;  
   const doctorId = document.getElementById('doctor').value;  
   const appointmentDate = document.getElementById('appointmentDate').value;  
   const appointmentTime = document.getElementById('appointmentTime').value;  
   // Send a POST request to the server to book an appointment  
   fetch('/api/appointments', {  
      method: 'POST',  
      headers: {  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({ patientId, doctorId, appointmentDate, appointmentTime })  
   })  
  .then(response => response.json())  
  .then(data => {  
      console.log(data);  
      // Add the new appointment to the appointment list  
      const appointmentListItem = document.createElement('li');  
      appointmentListItem.textContent = `${data.patient.name} - ${data.doctor.name} - ${data.appointmentDate} - ${data.appointmentTime}`;  
      appointmentList.appendChild(appointmentListItem);  
   })  
  .catch(error => console.error(error));  
});  
  
// Medication form submission  
medicationForm.addEventListener('submit', (e) => {  
   e.preventDefault();  
   const patientId = document.getElementById('patient').value;  
   const medicationName = document.getElementById('medicationName').value;  
   const dosage = document.getElementById('dosage').value;  
   const frequency = document.getElementById('frequency').value;  
   // Send a POST request to the server to add a medication  
   fetch('/api/medications', {  
      method: 'POST',  
      headers: {  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({ patientId, medicationName, dosage, frequency })  
   })  
  .then(response => response.json())  
  .then(data => {  
      console.log(data);  
      // Add the new medication to the medication list  
      const medicationListItem = document.createElement('li');  
      medicationListItem.textContent = `${data.patient.name} - ${data.medicationName} - ${data.dosage} - ${data.frequency}`;  
      medicationList.appendChild(medicationListItem);  
   })  
  .catch(error => console.error(error));  
});  
  
// Load patient list  
fetch('/api/patients')  
  .then(response => response.json())  
  .then(data => {  
      data.forEach(patient => {  
        const patientListItem = document.createElement('li');  
        patientListItem.textContent = `${patient.name} - ${patient.contactDetails}`;  
        patientList.appendChild(patientListItem);  
      });  
   })  
  .catch(error => console.error(error));  
  
// Load doctor list  
fetch('/api/doctors')  
  .then(response => response.json())  
  .then(data => {  
      data.forEach(doctor => {  
        const doctorListItem = document.createElement('li');  
        doctorListItem.textContent = `${doctor.name} - ${doctor.specialization}`;  
        doctorList.appendChild(doctorListItem);  
      });  
   })  
  .catch(error => console.error(error));  
  
// Load appointment list  
fetch('/api/appointments')  
  .then(response => response.json())  
  .then(data => {  
      data.forEach(appointment => {  
        const appointmentListItem = document.createElement('li');  
        appointmentListItem.textContent = `${appointment.patient.name} - ${appointment.doctor.name} - ${appointment.appointmentDate} - ${appointment.appointmentTime}`;  
        appointmentList.appendChild(appointmentListItem);  
      });  
   })  
  .catch(error => console.error(error));  
  
// Load medication list  
fetch('/api/medications')  
  .then(response => response.json())  
  .then(data => {  
      data.forEach(medication => {  
        const medicationListItem = document.createElement('li');  
        medicationListItem.textContent = `${medication.patient.name} - ${medication.medicationName} - ${medication.dosage} - ${medication.frequency}`;  
        medicationList.appendChild(medicationListItem);  
      });  
   })  
  .catch(error => console.error(error));