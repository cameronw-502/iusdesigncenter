//Team members API
axios
  .get("https://sheetdb.io/api/v1/xto5i3446ap5x?sheet=Team1")
  .then((response) => {
    console.log(response.data);

    document.getElementById("memberName1").innerHTML = data[0].Name;
  });
function test() {
  document.getElementById("memberName1").innerHTML = "test";
}

test();
