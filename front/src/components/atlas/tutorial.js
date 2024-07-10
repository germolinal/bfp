
function executeTutorialBehavior(tutorialID, stage){
    for(var i=0;i < tutorialBehavior.length;i++){
        const tutorial = tutorialBehavior[i];
        if(tutorial.title === tutorialID){
            if(stage < tutorial.stages.length){
                tutorial.stages[stage]();
            }else{
                console.log("ERROR: "+tutorialID+" does not have a stage number "+stage+" ... it has "+tutorial.stages.length);                
            }
        }
    }
}

function getTutorial(tutorialID, stage){
    // Stage is Zero by default
    if(stage === undefined){
        stage = 0;
    }

    var title=document.getElementById("title_text_aid")        
    var mainContent=document.getElementById("content_text_aid")
    var textAid = document.getElementById("text_aid");
    
    httpGetAsync("/api/tutorial/"+tutorialID+"/"+stage,function(response){
        var response=JSON.parse(response)
                
        if (response.success === true) {

            // Show navbar
            var navbar = document.getElementById("tutorial_navbar");
            var bottom_navbar = document.getElementById("bottom_navbar");
            navbar.classList.remove("hidden");
            bottom_navbar.classList.add("hidden");

            mainContent.innerHTML=response.txt;
            title.innerHTML=response.title;
            textAid.scrollTop = 0;

            // SETUP NAVITION BUTTONS
            // back button
            var backButton =  document.getElementById('back_tutorial_stage');                        
            if( stage > 0 ){
                backButton.onclick=function(){
                    var newStage = parseInt(stage)-1;                    
                    router.navigate("?tutorial="+tutorialID+"&stage="+newStage);                    
                }
                backButton.classList.remove("disabled")
            }else{
                backButton.classList.add("disabled")
                backButton.onclick=function(){}
            }            
                
            // Go back home button                
            var homeButton =  document.getElementById('home_tutorials');                            
            homeButton.onclick=function(){
                navbar.classList.add("hidden");
                bottom_navbar.classList.remove("hidden");
                router.navigate("")
            }                    

            // next button
            var forwardButton =  document.getElementById('next_tutorial_stage');                            
            if( !response.last ){
                forwardButton.onclick=function(){
                    var newStage = parseInt(stage) + 1;                                        
                    router.navigate("?tutorial="+tutorialID+"&stage="+newStage);
                }
                forwardButton.classList.remove("disabled")
            }else{
                forwardButton.classList.add("disabled")
                forwardButton.onclick=function(){}
            }       
            
            // JS Behaviour
            executeTutorialBehavior(tutorialID,stage);

        }else{
            mainContent.innerHTML="<p>An error occured</p>"
            mainContent.innerHTML += "<p>"+response.txt+"</p>"
        }            
                
    });

}