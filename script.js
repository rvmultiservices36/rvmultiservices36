console.log("RV Multi Services Website Ready");

const services = {

  "आधार सेवा": `
    <h2>आधार सेवा</h2>

    <p>
    नवीन आधार, अपडेट, मोबाईल लिंक, पत्ता बदल इ.
    </p>

    <h3>आवश्यक कागदपत्रे:</h3>

    <ul>
      <li>आधार कार्ड</li>
      <li>मोबाईल नंबर</li>
      <li>रेशन कार्ड</li>
      <li>लाईट बिल</li>
    </ul>
  `,

  "पॅन कार्ड": `
    <h2>पॅन कार्ड</h2>

    <p>
    नवीन पॅन कार्ड व सुधारणा सेवा उपलब्ध.
    </p>

    <h3>आवश्यक कागदपत्रे:</h3>

    <ul>
      <li>आधार कार्ड</li>
      <li>फोटो</li>
      <li>मोबाईल नंबर</li>
      <li>स्वाक्षरी</li>
    </ul>
  `,

  "उत्पन्न दाखला": `
    <h2>उत्पन्न दाखला</h2>

    <p>
    सरकारी योजनांसाठी उत्पन्न दाखला.
    </p>

    <h3>आवश्यक कागदपत्रे:</h3>

    <ul>
      <li>रेशन कार्ड</li>
      <li>आधार कार्ड</li>
      <li>7/12 उतारा</li>
      <li>लाईट बिल</li>
    </ul>
  `,

  "जात दाखला": `
    <h2>जात दाखला</h2>

    <p>
    जात प्रमाणपत्र सेवा उपलब्ध.
    </p>

    <h3>आवश्यक कागदपत्रे:</h3>

    <ul>
      <li>आधार कार्ड</li>
      <li>शाळा सोडल्याचा दाखला</li>
      <li>वडिलांचा जात दाखला</li>
      <li>रेशन कार्ड</li>
    </ul>
  `,

  "रहिवासी दाखला": `
    <h2>रहिवासी दाखला</h2>

    <p>
    रहिवासी प्रमाणपत्र सेवा.
    </p>

    <h3>आवश्यक कागदपत्रे:</h3>

    <ul>
      <li>आधार कार्ड</li>
      <li>लाईट बिल</li>
      <li>रेशन कार्ड</li>
      <li>भाडे करार</li>
    </ul>
  `,

  "AEPS सेवा": `
    <h2>AEPS सेवा</h2>

    <p>
    पैसे काढणे, पैसे टाकणे, बॅलन्स चेक.
    </p>

    <h3>आवश्यक कागदपत्रे:</h3>

    <ul>
      <li>आधार लिंक बँक खाते</li>
      <li>मोबाईल नंबर</li>
      <li>फिंगरप्रिंट</li>
    </ul>
  `

};

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("click", () => {

    const title = card.innerText.trim();

    const info = services[title];

    if(info){

      const oldBox = document.querySelector(".details-box");

      if(oldBox){
        oldBox.remove();
      }

      const box = document.createElement("div");

      box.classList.add("details-box");

      box.innerHTML = info;

      document.body.appendChild(box);

      box.scrollIntoView({
        behavior:"smooth"
      });

    }

  });

});console.log("RV Multi Services Website Ready");

const button = document.querySelector("button");

button.addEventListener("click", () => {

  alert("तुमचा फॉर्म यशस्वीरित्या सबमिट झाला ✅");

});
