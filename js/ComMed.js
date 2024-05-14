window.addEventListener('DOMContentLoaded', () => {
  const selectHM = document.querySelector('#selectCM');
  const textareaHM = document.querySelector('#textareaCM');

  function loadData() {
    return new Promise((resolve, reject) => {
      // Load the JSON file
      const url = 'ref/CM.json';
      const oReq = new XMLHttpRequest();
      oReq.open('GET', url, true);
      oReq.responseType = 'json';
      oReq.onload = function (e) {
        resolve(oReq.response);
      };
      oReq.onerror = function (e) {
        reject(new Error('Error loading JSON data'));
      };
      oReq.send();
    });
  }

  loadData()
    .then((jsonData) => {
      // jsonData should be an array of objects now
      const dataArr = jsonData;

      // Populate the select element
      dataArr.forEach((dataObj) => {
        const option = document.createElement('option');
        option.textContent = dataObj.Medication; // Use textContent to display the actual Medication
        option.setAttribute('data-value', dataObj.Dose); // Set a custom attribute to store the Medication value
        selectHM.add(option);
      });

      // Show the value of "Dose" property of the first object in the textarea
      textareaHM.value = dataArr.length > 0 ? dataArr[0].Dose : '';

      // Update the text area when the selection changes
      selectHM.addEventListener('change', () => {
        const selectedIndex = selectHM.selectedIndex;
        const selectedValue = selectHM.options[selectedIndex].getAttribute('data-value');
        textareaHM.value = selectedValue;
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
});