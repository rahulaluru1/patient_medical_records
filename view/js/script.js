
const headers = ['SL', 'Date', 'Diagnosis', 'Weight', 'Doctor'];

function getData(id){
    console.log("called");
    fetch(`https://jsonmock.hackerrank.com/api/medical_records?userId=`+id,{
    method:"GET",
}).then((response)=>{
    response.json().then((res)=>{
        // console.log(res['data']);
        document.getElementById("loader-view").classList.add("hidden")
        document.getElementById("patient-name").innerHTML=res['data'][0].userName;
        document.getElementById("patient-dob").innerHTML=res['data'][0].userDob;
        document.getElementById("patient-height").innerHTML=res['data'][0].meta.height;
        var tr;
        var table=document.getElementById('patient-records-table').getElementsByTagName('table-body')[0];
        document.getElementById("table-header").innerHTML+=`<tr>
        <td>${headers[0]}</td>
        <td>${headers[1]}</td>
        <td>${headers[2]}</td>
        <td>${headers[3]}</td>
        <td>${headers[4]}</td>
         
        </tr>`
        for(let i=0;i<res['data'].length;i++){
            var d=new Date(res['data'][i].timestamp)
            var dia=res['data'][i].diagnosis.name+"(" +res['data'][i].diagnosis.id+")" ;
            var wei=res['data'][i].meta.weight;
            var docn=res['data'][i].doctor.name
            document.getElementById("table-body").innerHTML+=`<tr>
                                                            <td>${i}</td>
                                                            <td>${d}</td>
                                                            <td>${dia}</td>
                                                            <td>${wei}</td>
                                                            <td>${docn}</td>
                                                             
                                                            </tr>`
        }
    }).catch(err=>{
        console.log(err);
    })
})
}
