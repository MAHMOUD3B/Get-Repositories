// fetch API prctice
let input, getBtn, dataContainer;
input = document.querySelector(".get-repos input");
getBtn = document.querySelector(".get-button");
dataContainer = document.querySelector(".show-data");

dataContainer.innerHTML = "<div>Not Repos Found</div>";
getBtn.addEventListener("click", (btn) => {
  getRepos(input.value);
});

function getRepos(username) {
  if (input.value === "") {
    dataContainer.innerHTML = `<div>Enter Github Username</div>`;
  } else {
    dataContainer.innerHTML = `<div>There Are Repos</div>`;
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((reposetries) => {
        reposetries.forEach((repos) => {
          let link = document.createElement("a");
          link.href = repos.clone_url;
          link.target = "blank";
          let linkText = document.createTextNode(repos.name);
          link.appendChild(linkText);
          dataContainer.appendChild(link);
        });
      });
  }
}
