const element = document.querySelector('div');



const ft = async () => {
  var myHeaders = new Headers();

  const requestOptions = {
    method: "POST",
    body: {"name": "shhs"}
  }

  const response = await fetch('https://gfgdfv.herokuapp.com/categories', requestOptions)
  const data = await response.json()
  console.log(data)
}
ft()
