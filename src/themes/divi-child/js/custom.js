console.log(`
  ___  _____  ___    ____  ____    __    _  _  ____  ____  _  _  ___
 / __)(  _  )/ __)  (  _ \(  _ \  /__\  ( \( )(  _ \(_  _)( \( )/ __)
( (__  )(_)(( (_-.   ) _ < )   / /(__)\  )  (  )(_) )_)(_  )  (( (_-.
 \___)(_____)\___/  (____/(_)\_)(__)(__)(_)\_)(____/(____)(_)\_)\___/
 
                Designed & Developed by COG Branding
                    https://cogbranding.com.au`);

//repeat following code if mulitple files needs to be called
// add the script location in the getScript("") function
$.getScript(
    "https://cogbranding.github.io/COGbrandingCDN.github.io/",
    function () {
        //call all the function required from that script in required order
        currentYear();
    }
);
