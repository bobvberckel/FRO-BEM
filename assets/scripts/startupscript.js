// ! INFORMATION
/*
    Code written by: Bob van Berckel
    Code written on (Start date): 26/10/2020
    Code style: Pure JavaScript
    Code used for: Page load script to change background. 
*/

// When the script starts up, it waits for the window to load. When it does, it will run a small script.
window.onload = () => {
    // Telling the script to wait a second before doing the next actions.
    setTimeout(() => {
        // Landingbackground
        document.getElementById(`landingpage`).classList.remove(`prelandingpage`);
        document.getElementById(`landingpage`).classList.add(`landingpage`);

        // Landing header (Name)
        document.getElementById(`landingpage__header`).classList.remove(`prelandingpage__header`);
        document.getElementById(`landingpage__header`).classList.add(`landingpage__header`);

        // Landing second header (Title)
        document.getElementById(`landingpage__secondheader`).classList.remove(`prelandingepage__secondheader`);
        document.getElementById(`landingpage__secondheader`).classList.add(`landingpage__secondheader`);
    }, 1000);
}