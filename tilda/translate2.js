var resources = {
    dev: { translation: { 'key': 'value' } },
    'en': {
        translation: {
            'textstart': {
				'txt': "Let's learn how to code!",
                'txt2': 'Click on one of the stumps to play with me.',
                'txt4': 'While',
				'txt3 ': 'If',
				'txt5': 'For',
				'txt6': 'All',
				'txt7': 'Need help?',
				'txt8': 'Click on me!'

				            },

            'textwhile':{
            	  'txt': "Let's start with a very basic example",
                  'txt2': 'While the circle is purple, push Quack . When it change color push Mjau',
                  'txt3': "Let's try something little more advanced!",
                  'txt4': 'While the brightest ball is placed to the left, put Froggy in the woods. Otherwise, put him in the dessert',
                  'txt5': 'Oh no you lost, click me to try again',
                  'txt6': 'Go to next level',
                  'txt7': 'Quack',
                  'txt8': 'Try Again'
            },


 			'textif':{
            	  'txt': 'If the cloud is blue, click at the black bird else click at the helicopter'
            },


                 
              
	
			'textfor': {
				'txt': 'Froggy feels lonely. Pick some flowers to cheer him up!',
				'txt2': 'Froggys basket is empty. As long as the amount of flowers in the basket is less then 10, keep picking flowers.',
				'txt3': 'Done!'
			
			},

				'textifwhilefor': {
				'txt': 'If the puzzle is not solved, and while there is time, help Froggy solve it.',
				'txt2': 'Start',
				'txt3': 'Help',
				'txt4': 'Back',
				'txt5': 'Move the tiles from the left square to the right square, the picture should show Froggys friend Iggy',
				'txt6': 'You lost!',
				'txt7': 'You did it!',
				'txt8': 'Play again',
				'txt9': 'Ok. Got it!'
				
			}

		
			
        }
    },
    'sv': {
        translation: {
            
            'textstart': {
				'txt': 'Lär dig hur man kodar!',
                'txt2': 'Klicka på en av stubbarna för att börja spela.',
                'txt4': 'While',
				'txt5': 'For',
				'txt3': 'If',
				'txt6': 'All',
				'txt7': 'Vill du ha hjälp?',
				'txt8': 'Klicka på mig!'
				             
                 
				   },

			'textwhile': {
				  'txt': 'Låt oss börja med ett väldigt grundläggande exempel!',
                  'txt2': 'Medans cirkeln är lila, tryck på Kvack. När den byter färg, tryck på Mjau',
                  'txt3': 'Nu försöker vi med något lite svårare!',
                  'txt4': 'Medans den ljusaste bollen är längst till vänster, släpp Froggy i skogen. Annars, släpp honom i öknen',
                  'txt5': 'Åh nej du förlorade! Tryck på mig för att försöka igen',
                  'txt6': 'Gå till nästa nivå',
                  'txt7' : 'Kvack',
                  'txt8': 'Försök igen'
			

				
            },


			'textif': {
				'txt': 'Om molnet är blått, tryck på den blåa fågeln annars tryck på den röda fågeln'

					},
        
			
			'textfor': {
				'txt': 'Froggy känner sig ensam. Plocka några blommor för att muntra upp honom!',
				'txt2': 'Froggys korg är tom. Så länge summan av blommorna i korgen är mindre än 10, fortsätt att plocka!',
				'txt3': 'Klar!'
			
			},

				'textifwhilefor': {



				'txt': 'Om puzzlet inte är löst och medan det finns tid kvar, hjälp Froggy att lösa det',
				'txt2': 'Börja',
				'txt3': 'Hjälp',
				'txt4': 'Tillbaka',
				'txt5': 'Flytta pusselbitarna från den vänstra rutan till den högra rutan, bilden ska visa Froggys kompis Iggy',
				'txt6': 'Du förlorade!',
				'txt7': 'Du klarade det!',
				'txt8': 'Spela igen',
				'txt9': 'Ok. Jag förstår!'
			
			},
			
			'help': {
				'me': 'Behöver du hjälp?',
				'me2': 'Tryck på mig!'
				
			},
			
			
        }
    }
}

function setLanguage(lang) {
    localStorage.setItem("language", lang);
}


$(document).ready(function() {
    i18n.init({
        resStore: resources,
        fallbackLng: 'en',
        lng: localStorage.getItem('language')

    });
    $(document).i18n();
});