const getAllProv = () => {
    return fetch('https://feriirawan-api.herokuapp.com/list/symbols/province/200')
        .then(response => response.json())
        .then(response => response.lambang)
}

const addProv = async (prov) => {
    const provinsi = await prov
    let temp = provinsi.map((item) => (
        `<option value=${item.id} data-nama=${item.nama} data-lambang=${item.url}>${item.nama}</option>`
    )).join('')
    document.querySelector('.form-select').innerHTML = temp
}
const setImageProvandKabKot= async(option)=>{

    document.querySelector('.img-prov').src=option.options[option.selectedIndex].dataset.lambang
    const listKabKot=await getKabKot(option.options[option.selectedIndex].value)
    
    let temp=listKabKot.map((item,index)=>(
        `<tr>
        <th scope="row">${index+1}</th>
        <td>${item.nama}</td>
        <td>${option.options[option.selectedIndex].dataset.nama}</td>
      </tr>`
    )).join('')
    document.querySelector('.listKabKot').innerHTML=temp
}
const getKabKot=(id)=>{
    return fetch('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi='+id)
    .then(response=>response.json())
    .then(response=> response.kota_kabupaten)

 
} 
const getprov=()=>{
    return fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
    .then(response=>response.json())
    .then(response=>response.provinsi)


}
const provIndo=async(allProv,provbaru)=>{
    let allprovlama=await allProv
    let allprovbaru=await provbaru
    let provBaru=[];
    allprovbaru.forEach((element,index) => {
        let imgurl;
        allprovlama.forEach(el=>{
            if (element.nama==el.title) {
                imgurl=el.url
                
            }
          
        })
        provBaru.push({id:element.id,nama:element.nama,url:imgurl})
    });
    return provBaru
    
}
addProv(provIndo(getAllProv(),getprov()))
