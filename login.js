const small = new RegExp('(?=.*[a-z])');
const capital = new RegExp('(?=.*[A-Z])');
const number = new RegExp('(?=.*[0-9])');
const more8 = new RegExp('(?=.{8,})');
const spec = new RegExp('(?=.*[!@#\$%\^&\*])');
const space = /\s/g;

var all_testing = false;

const smallchck = document.getElementById('small');
const capchck = document.getElementById('cap');
const numchck = document.getElementById('num');
const specchk = document.getElementById('special');
const lenchck = document.getElementById('8char');
const submitbtn = document.getElementById('submit');

    function username_pressed(str){
        if(space.test(str)){
            document.getElementById('spaceCheck').style.display= "block";
        }else {
            document.getElementById('spaceCheck').style.display= "none";
        }
    }


    function passcheck(pass){
        all_testing =  small.test(pass) && capital.test(pass) && number.test(pass) && spec.test(pass) && more8.test(pass);
        if(all_testing ){
            document.getElementById('password1_input').style.border="2px solid green";
        }else if(pass.length ==0){
            document.getElementById('password1_input').style.border="none";
        }else {
            document.getElementById('password1_input').style.border="2px solid red";
        }

        if(small.test(pass)){
            smallchck.style.color="#00ff00";
        }else {
            smallchck.style.color="black";
        }
        if(capital.test(pass)){
            capchck.style.color="#00ff00";
        }else {
            capchck.style.color="black";
        }
        if(number.test(pass)){
            numchck.style.color="#00ff00";
        }else {
            numchck.style.color="black";
        }
        if(spec.test(pass)){
            specchk.style.color="#00ff00";
        }else {
            specchk.style.color="black";
        }
        if(more8.test(pass)){
            lenchck.style.color="#00ff00";
        }else {
            lenchck.style.color="black";
        }
    }

    function pass2check(str){
        var pass1 = document.getElementById('password1_input').value; 
        
        if( all_testing && pass1 == str){
            submitbtn.disabled = false;
            submitbtn.style.backgroundColor = "rgb(24,90,188)";
            submitbtn.style.cursor = "pointer";
            
            document.getElementById('password2_input').style.border="2px solid green";
        }  else {
            submitbtn.style.cursor = "default";
            submitbtn.disabled = true;
            submitbtn.style.backgroundColor = "grey";
            document.getElementById('password2_input').style.border="2px solid red";
            

        }
        if( str.length ==0){
            document.getElementById('password2_input').style.border="none";
        }
        document.getElementById('match_pass').style.display= pass1==str ? 'none':'block';        
    }

    function show1(){
        document.getElementById('password1_input').setAttribute("type", "text");
        document.getElementById('show1').style.display = 'none';
        document.getElementById('hide1').style.display='block';
    }
    function show2(){
        document.getElementById('password2_input').setAttribute("type", "text");
        document.getElementById('show2').style.display = 'none';
        document.getElementById('hide2').style.display='block';
    }
    function hide1(){
        document.getElementById('password1_input').setAttribute("type", "password");
        document.getElementById('hide1').style.display = 'none';
        document.getElementById('show1').style.display='block';
    }
    function hide2(){
        document.getElementById('password2_input').setAttribute("type", "password");
        document.getElementById('hide2').style.display = 'none';
        document.getElementById('show2').style.display='block';
    }
    
