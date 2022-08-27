import Button from "./button.js"
import CircleButton from "./circleButton.js"
import observable from "./observer.js"

function logger(data) {
    console.log(`${Date.now()} ${data}`);
}

function logger2(data){
    console.log(`logger2 Called ${data}`)
}

observable.subscribe(logger);
observable.subscribe(logger2);

const root = document.querySelector('#root');
const elemList = [Button,CircleButton];
root.append(...elemList)

/*
1. html렌더, js파일 호출
2. index.js 들어와서 logger, logger2, observable 인스턴스 불러옴.
3. observable 인스턴스에 logger 2개 구독.
4. 버튼들을 불러와서 그려줌.
    4.1 버튼들에는 클릭이벤트로 notify하게 걸어놨음
5. 버튼 클릭시에 notify 불리고 Observable 구독하는 옵저버(logger,logger2)에게 data가 넘어가고 실행됨.


보통 함수를 구독해두고, 옵저버블에서 이벤트 발생시에 notify 호출
*/

