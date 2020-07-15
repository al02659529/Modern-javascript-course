const form = document.querySelector('.form');
const validation = document.querySelector('.validation');
const header = document.querySelector('.header');

const updateUI = enf =>{

};
form.addEventListener('submit', e =>{
    e.preventDefault();
    const epID = form.epid.value.trim();
    const opID = form.opid.value.trim();
    let fullName = null;
    let homeLC = null;
    let homeCountry = null;
    let epStatus = null;


    getEPinfo(opID, epID).then(data =>{
        fullName = data.full_name;
        homeLC = data.home_lc.name;
        homeCountry = data.home_lc.country;
        epStatus = data.status;
        console.log('full name: ', fullName);
        console.log('home lc: ', homeLC);
        console.log('home country: ', homeCountry);
        console.log('status: ', epStatus);

        validation.querySelector('.epname').innerText = fullName;
        validation.querySelector('.hl').innerText = homeLC;
        validation.querySelector('.hc').innerText = homeCountry;
        validation.querySelector('.statustobreak').innerText = epStatus.toUpperCase();
        validation.classList.remove('hide', 'stay-out');
        validation.classList.add('move-top');
        form.classList.add('hide');
        header.querySelector('h1').innerText = 'Validación de la solicitud';
    }).catch(err =>{
        return err;
    });




});