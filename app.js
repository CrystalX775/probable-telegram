const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    } else{
        entry.target.classList.remove('show');
    }
  
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el)=> observer.observe(el));
  
  function myfunction() {
  document.getElementById("Hacker1").style.color = "blue";
  };
  function myFunction1() {
  document.getElementById("Hacker1").style.color = "red";
  }
  let pepole = prompt("Please enter your name");
  if(pepole != null){
    document.getElementById("demo").innerHTML = "Hello " + pepole + "! How are you today?";
  }