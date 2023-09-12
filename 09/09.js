let juso;          //전체주소 : juso2023.json
let si;            //시
let gu;            //구
let dong;          //동

//시설유형
let equptype = {
    "노인시설": "001",
    "복지회관": "002",
    "마을회관": "003",
    "보건소": "004",
    "주민센터": "005",
    "면동사모소": "006",
    "종교시설": "007",
    "금융기관": "008",
    "정자": "009",
    "공원": "010",
    "정자 파고라": "011",
    "공원": "012",
    "교량하부": "013",
    "나무그늘": "014",
    "하천둔치": "015",
    "기타": "099"
}

//select박스 채우기
//d : data, s : select box
const addOption = (d, s) => {
    for(let [k, v] of Object.entries(d)) {
        console.log(k, v)
        const option = document.createElement("option") ;
        option.value = v ;
        option.text = k ;
        s.appendChild(option) ;
    }
}

//주소정보가져오기
const getJuso = async (sel1) => {
    const resp = await fetch("juso2023.json") ;
    // const data = await resp.json() ;
    // juso = data ;
    juso = await resp.json() ; 

    si = {} ;
    //jsuo 배열
    juso.forEach(element => {
        let {시도명칭, 시도코드 } = element ;
        
        if (!si[시도명칭]) {
            si[시도명칭] = 시도코드 ;
        }       
    });
    console.log(si) ;
    addOption(si, sel1) ;
}

document.addEventListener("DOMContentLoaded", () => {
    //컴포넌트 가져오기
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    const sel3 = document.querySelector("#sel3");
    const sel4 = document.querySelector("#sel4");
    const bt = document.querySelector("#bt");


    //시 정보
    getJuso(sel1);
});