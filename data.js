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
    name: "Balrampur",
    url: "http://balrampur.gov.in/",
  },
  {
    name: "Bastar",
    url: "http://bastar.gov.in/",
  },
];

function createJob(obj) {
  // Data senetization
  let districtName = obj.name;
  let districtSite = obj.url;
  let districtRecruitmentSite = `${districtSite}notice_category/recruitment/`;

  // UI
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <div class="card-header">
    ${districtName}
    </div>
    <div class="card-body">
       <div class="container">
            <iframe src=${districtRecruitmentSite} target="_blank" style="width:100%; height:80vh;" allow="camera 'none'; microphone 'none'; payment 'none'"   sandbox="" />

            </iframe>
       </div>
      <a href=${districtSite} class="btn btn-primary" title=${districtName}>Go to official site</a>
    </div>
    `;

    return div;
}

const demo = createJob(data[0]);
console.log(demo);
document.querySelector('.container').appendChild(demo);