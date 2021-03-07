
let Show_Title=document.querySelector('#title');
let Search =document.querySelector('#search');
let picarea =document.querySelector('#picarea');




const addImgShow = (shows) => {
	 for(let result of shows){
	const img= document.createElement ('IMG');
	 if (result.show.image) {
	img.src= result.show.image.medium;
	 picarea.append(img)
	console.log (img.src)
			 }
	  }

}


Search.addEventListener('click', async function()  {
	 // e.preventDeafult();
	 picarea.innerHTML ='';
	 const searchTerm = Show_Title.value;
	 const config ={ params: {q: searchTerm}}
	const res= await axios.get(`http://api.tvmaze.com/search/shows`,config);
	console.log(res.data)
	addImgShow(res.data)
	Show_Title.value='';
})

