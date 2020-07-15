const key = '6bc71ee7809d54dafe6bc629ab03291fc0551e696a749a5904bedff42b4ad506';


// const validateOP = async ( opID) =>{
//     const base = `https://api.aiesec.org/v2/opportunities/`;
//     const query = `${opID}?access_token=${key}`;
//     const response =  fetch(base + query);
//     const data = (await response);
//     return data;
// };

const getEPinfo = async ( opID, epID) =>{
    const base = `https://api.aiesec.org/v2/opportunities/${opID}/applicant?access_token=${key}&person_id=${epID}`;
    const response = fetch(base);

    if ((await response).status !== 200){
        throw new Error('Cannot fetch the data, please verify that the EP and OP information is correct');
    }else {
        return (await response).json();
    }
};

// getEPinfo(1027113, 29889412 ).then(data => {
//     console.log(data);
//     console.log('full name: ', data.full_name);
//     console.log('home lc: ', data.home_lc.name);
//     console.log('home country: ', data.home_lc.country);
//     console.log('status: ', data.status)
// }).catch(err =>{
//     console.log( err);
// });

// validateOP(1027113).then(data =>{
//     console.log(data);
// });