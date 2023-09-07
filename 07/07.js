//전역변수 
//하트와 폭탄의 위치를 결정하는 배열 
//하트 : 0 , 폭탄 : 1
let arr = [0,0,0,0,0,0,0,0,1] ;

//폭탄섞기 확인용 플래그
let flag = true ;

//눌러진 박스 수
let cnt = 0 ;

//초기화
const init = (boxs) => {
    //변수 초기화
    flag = true ;
    cnt = 0 ;
    //박스 숫자 초기화
    boxs.forEach(element => {
        let n = element.getAttribute("id").slice(-1) ;
        console.log(n) ;
        element.textContent = n ;
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    // 컴포넌트 가져오기
    const boxs = document.querySelectorAll(".row > div");
    const bt = document.querySelector("button") ;
    const h2 = document.querySelector("h2") ;

    //초기화
    init(boxs) ;

    //폭탄섞기 버튼처리
    bt.addEventListener('click', () => {
        //flage 변수 확인
        if (flag) {
            //배열 suffule
            arr.sort(() => Math.random() - 0.5);
            console.log(arr) ;

            h2.textContent = '폭탄을 피해 선택해 주세요.' ;
            h2.style.color = 'red' ;
            flag = false ;
        }
    });
 

});