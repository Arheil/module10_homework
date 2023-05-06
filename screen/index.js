const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  alert(`Размер экрана: \n ширина ${width}\n высота ${height}`);
	
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
    const { coords } = position;
    console.log(coords.latitude, coords.longitude);
  });
}
})
