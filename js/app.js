// Ui
const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach((panel)=>{
	// console.log(panel);

	panel.addEventListener('mouseenter',()=>{
		// console.log("hay");

		removeactiveprevclass();
		panel.classList.add('active');
	})

	panel.addEventListener('mouseleave',()=>{

		removeactiveprevclass();
	})

});


function removeactiveprevclass(){
	panels.forEach((panel)=>{
		panel.classList.remove('active');
	})

}