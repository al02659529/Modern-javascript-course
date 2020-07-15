var getExpaResponse = function getExpaResponse(opID, epID) {
    const key = '6bc71ee7809d54dafe6bc629ab03291fc0551e696a749a5904bedff42b4ad506';
    const base = "https://api.aiesec.org/v2/opportunities/";
    const keyaddition = "/applicant?access_token=" + key;
    const epAddition = "&person_id=" + epID;
    const completeURL = base + opID + keyaddition + epAddition;
    return new Promise(function(resolve, reject){
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', function(){
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200){
                resolve(request.responseText);
            }else if (request.readyState === 4){
                reject('Could not fetch data');
            }
        });

        request.open('GET', completeURL);
        request.send();

    })


}

function getExpaStatus(opID, epID){

    getExpaResponse(opID, epID).then(function(data){
        return data.status;
    })
}

// getExpaResponse(1222071, 4068561).then(function (data) {
//     console.log(data);
//     console.log(JSON.parse(data).status);
//     console.log(data);
// });