  //Sphere Animation
  const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'REACT', 'ANGULAR',
    'PYTHON', 'SASS', 'GIT',
     'SQL', 'JQUERY', 'JAVA'
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: 230,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color to each text in sphere
var color = '#FF5733';
document.querySelector('.Sphere').style.color = color;

//Contact Form Validation
function Validation() {
				var name =
					document.forms.ContactForm.Name.value;
				var email =
					document.forms.ContactForm.EMail.value;
				var what =
					document.forms.ContactForm.Subject.value;
				var message =
					document.forms.ContactForm.Message.value;
				var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
				var regName = /\d+$/g;								 // Javascript reGex for Name validation

        if (name == "" || regName.test(name)) {
          document.getElementById("name").classList.add("below");
                  return false;
                }else{
                    document.getElementById("name").classList.remove("below");
                  }
          
                if (email == "" || !regEmail.test(email)) {
                  document.getElementById("email").classList.add("below");
                  return false;
                }else{
                  document.getElementById("email").classList.remove("below");
                }
        
                if (what == "") {
                  var element = document.getElementById("sub");
                  element.classList.add("below");
                  return false;
                }
        
                if (message == "") {
                  var element = document.getElementById("msg");
                  element.classList.add("below");
                  return false;
                }
                return true;
              }