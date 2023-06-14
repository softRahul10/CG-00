const data = [
  {
    name: "Balod",
    url: "http://balod.gov.in/",
  },
  {
    name: "Balod Bazar",
    url: "https://balodabazar.gov.in/",
  },
  {
    name: 'Balodabazar Bhatapara',
    url: "https://balodabazar.gov.in/notice_category/recruitment/",
  },
  {
    name: "Balrampur",
    url: "http://balrampur.gov.in/",
  },
  {
    name: "Bastar",
    url: "http://bastar.gov.in/",
  },
  {
    name: "Bemetara",
    url: "http://bemetara.gov.in/",
  },
  {
    name: "Bijapur",
    url: "http://bijapur.gov.in/",
  },
  {
    name: "Bilaspur",
    url: "http://bilaspur.gov.in/"
  },
  {
    name: "Dantewada",
    url: "http://dantewada.gov.in/"
  },
  {
    name: "Dhamtari",
    url: "http://dhamtari.gov.in/"
  },
  {
    name: "Dantewada",
    url: "http://dantewada.gov.in/"
  },
  {
    name: "Durg",
    url: "http://durg.gov.in/"
  },
  {
    name: "Gariaband",
    url: "http://gariaband.gov.in/"
  },
  {
    name: "Gaurela Pendra Marwahi",
    url: "https://gaurela-pendra-marwahi.cg.gov.in/"
  },
  {
    name: "janjgir champa",
    url: "http://janjgir-champa.gov.in/"
  },

  {
    name: "Jashpur",
    url: "https://jashpur.nic.in/en/"
  },

  {
    name: "Kabirdham",
    url: "http://kawardha.gov.in/"
  },

  {
    name: "Korba",
    url: "http://korba.gov.in/"
  },

  {
    name: "Korea",
    url: "http://korea.gov.in/"
  },

  {
    name: "mahasamund",
    url: "http://mahasamund.gov.in/"
  },

  {
    name: "Mungeli",
    url: "http://mungeli.gov.in/"
  },

  {
    name: "narayanpur",
    url: "http://narayanpur.gov.in/"
  },

  {
    name: "Raigarh",
    url: "http://raigarh.gov.in/"
  },

  {
    name: "Raipur",
    url: "http://raipur.gov.in/"
  },

  {
    name: "Rajnandgaon",
    url: "http://rajnandgaon.gov.in/"
  },
  {
    name: "Sukma",
    url: "https://sukma.gov.in/"
  },
  {
    name: "Surajpur",
    url: 'http://surajpur.gov.in/'
  },
  {
    name: "Surguja",
    url: "http://surguja.gov.in/"
  }
];

function createJob(obj) {
  // Data senetization
  let districtName = obj.name;
  let lang = checkLanguage(obj);
  let districtSite = `${obj.url}notice_category/recruitment/`;
  if (lang === "hindi") {
    districtSite = `${obj.url}en/notice_category/recruitment/`;
  }

  // UI
  const li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");

  li.innerHTML = `
              <div class="ms-2 me-auto">
                 <div class="fw-bold" style="text-transform:capitalize"> ${districtName} </div>
              </div>
              <a class="badge bg-primary rounded-pill" href=${districtSite} target="_blank" >
                "Go"
              </a>
    `;

  return li;
}

function checkLanguage(obj) {
  const hindi = ['bastar', 'bemetara', 'bijapur', 'bilaspur', 'dantewada', 'gariaband', 'janjgir champa', 'kabirdham',
    'raigarh', 'sukma', 'surajpur'];
  for (let i = 0; i < hindi.length; i++) {
    if (obj.name.toLowerCase() === hindi[i]) {
      return 'hindi';
    }
  }
  return 'english';
}

// update UI

const map = data.map(ele => createJob(ele));
const parent = document.querySelector('#data-parent');
map.forEach(ele => parent.appendChild(ele));