axios
  .get("https://sheetdb.io/api/v1/xto5i3446ap5x?sheet=Projects")
  .then((response) => {
    console.log(response.data);
    // document.getElementById("project1_image").src =
    //   response.data[0]["Project Image"];
    // document.getElementById("project1_name").innerHTML =
    //   response.data[0]["Project Name"];
    // document.getElementById("project1_description").innerHTML =
    //   response.data[0]["Project Description"];
    // document.getElementById("project2_image").src =
    //   response.data[1]["Project Image"];
    document.getElementById("name").innerHTML =
      response.data[1]["Project Name"];
    document.getElementById("description").innerHTML =
      response.data[1]["Project Description"];
  });
