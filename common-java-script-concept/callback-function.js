function greeting(greetingHandler,name){
    greetingHandler(name);
}
function greetingHandler(name){
    console.log('Good Morning', name);
    
}
function greetingEvening(name){
    console.log('Good Evening', name);
    
}
function greetingNight(name){
    console.log('Good Night', name);
    
}

greeting(greetingHandler,'Tom holand');
greeting(greetingHandler, 'Christofar nolan');
greeting(greetingHandler, 'Max versteppen');
greeting(greetingEvening, 'Charlers lerlerc'); 
greeting(greetingEvening, 'David Jhonson'); 
greeting(greetingNight, 'Chillian merphy'); 



// call back function use in dom
function submitHandler(){
    console.log('submit button clicked');
    
}
document.getElementById('btn-submit').addEventListener('click',submitHandler)