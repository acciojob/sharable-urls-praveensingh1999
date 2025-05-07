// your code here
const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const yearInput = document.getElementById("year");
    const urlDisplay = document.getElementById("url");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent page reload

      const name = nameInput.value.trim();
      const year = yearInput.value.trim();

      let baseUrl = "https://localhost:8080/";
      let queryParams = [];

      if (name !== "") {
        queryParams.push(`name=${encodeURIComponent(name)}`);
      }
      if (year !== "") {
        queryParams.push(`year=${encodeURIComponent(year)}`);
      }

      if (queryParams.length > 0) {
        baseUrl += "?" + queryParams.join("&");
      }

      urlDisplay.textContent = baseUrl;
    });