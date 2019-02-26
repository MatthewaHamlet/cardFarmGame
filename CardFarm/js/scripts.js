//  Javascipts 



$(function () {

    // JSON 
    $.getJSON("docs/copy.json",
        function (data) {

            function textInject(tag, prop, item) {
                $(tag).text(prop, item);
            }

            function linkItem(tag, prop, item) {
                $(tag).attr(prop, item);
            }

            let attrArray = ['href', 'src'];
            let jSPath = data.landing;

            //  Title Text
            textInject('title', data.landing.title);
            textInject('[role="title"]', jSPath.title);

            //  Navigation Text
            textInject('[role="navItem_01"]', jSPath.navigation.navItem[0].text_01);
            textInject('[role="navItem_02"]', jSPath.navigation.navItem[1].text_02);
            textInject('[role="navItem_03"]', jSPath.navigation.navItem[2].text_03);

            // Button Text 
            textInject('[role="playBtn"]', jSPath.buttonText.buttons[0].playButtonText);
            textInject('[role="navBtn"]', jSPath.buttonText.buttons[1].navButtonText);

            // Information Page Copy 
            textInject('[role="info--header"]', jSPath.informationPage.main[0].subTitle);
            textInject('#info--copy', jSPath.informationPage.main[1].copy_01);

            // Favicon
            linkItem('[type="image/x-icon"]', attrArray[0], jSPath.favicon);

            // Navigation 
            linkItem('[role="navItem_01"]', attrArray[0], jSPath.navigation.navItem[0].href_01);
            linkItem('[role="navItem_02"]', attrArray[0], jSPath.navigation.navItem[1].href_02);
            linkItem('[role="navItem_03"]', attrArray[0], jSPath.navigation.navItem[2].href_03);

            // Buttons
            linkItem('[alt="Game Logo"]', attrArray[1], jSPath.header.logo_BackButton[0].src);
            linkItem('[alt="Back Button"]', attrArray[1], jSPath.header.logo_BackButton[1].src);

            // Main Image 
            linkItem('[alt="Game Image"]', attrArray[1], jSPath.main.mainImage[0].src);

            // PopUp Form Information Page

            // Information Page Social Icons
            linkItem('[alt="facebook icon"]', attrArray[1], jSPath.informationPage.main[2].socialIcons[0]);
            linkItem('[alt="instagram icon"]', attrArray[1], jSPath.informationPage.main[2].socialIcons[1]);
            linkItem('[alt="twitter icon"]', attrArray[1], jSPath.informationPage.main[2].socialIcons[2]);
            linkItem('[alt="mail icon"]', attrArray[1], jSPath.informationPage.main[2].socialIcons[3]);

            //  Information Page Social Icons Href
            linkItem('[role="l-one"]', attrArray[0], jSPath.informationPage.main[3].socialLinks[0]);
            linkItem('[role="l-two"]', attrArray[0], jSPath.informationPage.main[3].socialLinks[1]);
            linkItem('[role="l-three"]', attrArray[0], jSPath.informationPage.main[3].socialLinks[2]);
            linkItem('[role="l-four"]', attrArray[0], jSPath.informationPage.main[3].socialLinks[3]);


            //  PopUp Information Page
            textInject('[for="form--title"]', jSPath.popUp.popUpText.title);
            textInject('[for="InputEmail"]', jSPath.popUp.popUpText.email);
            textInject('#emailHelp', jSPath.popUp.popUpText.emailHelp);
            textInject('[for="name"]', jSPath.popUp.popUpText.name);
            textInject('[for="FormControlTextarea"]', jSPath.popUp.popUpText.textArea);
            textInject('button[type="submit"]', jSPath.popUp.popUpText.btnText);


            // // Help Page Copy
            textInject('[role="help--header"]', jSPath.helpPage.helpText.title);
            textInject('[role="help--copy"]', jSPath.helpPage.helpText.copy);


        }

    );

    // Landing Page Animations
    function ani(tag) {
        $(tag).animate({
            left: '-20px'
        }, 500, function () {
            $(this).animate({
                left: '0px'
            }, 50);
        });
    };

    ani('[alt="Game Logo"]');
    ani('[alt="Game Image"]');
    ani('[role="navBtn"]');
    ani('[alt="Back Button"]');


    // Nav Button Animation 
    $('[role="playBtn"]').animate({
        bottom: '20px'
    }, 500, function () {
        $(this).animate({
            bottom: '0'
        }, 50)
    });

    // Navigation button 
    $('[role="navBtn"], [alt="Back Button"]').click(function () {
        $('.navigation').toggle();
        $('[role="backToggle"]').toggle();
        $('[alt="Game Image"], [role="playBtn"], .container__help--text, [role="title"], .container--game, .popup--form').toggleClass('hide');
    });

    // Back Button 
    $('[alt="Back Button"]').on('click', function (e) {
        e.preventDefault();
        window.history.back();
    });

    // Title Animation 
    $('h1').effect('shake');

    // Play Button
    $('[role="playBtn"]').click(function () {
        window.location.href = 'play.html';
    })

    //  Mail Popup Information Page 
    $('[alt="mail icon"], .close ').click(function () {
        $('.popup--form').toggle();
        $('[alt="Game Image"], .container__help--text, [role="title"], .container--game').toggleClass('hide');
    });



});