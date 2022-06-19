const element = document.querySelector('div');



const ft = async () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body:{
      "name": "lorem"
    }
};
  const response = await fetch('https://categoriestest.herokuapp.com/categories-test', requestOptions)
  console.log(response)
}
ft()
