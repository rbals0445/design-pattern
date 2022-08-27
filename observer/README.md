### 의도

- behavior design pattern
- 관찰중인 multiple objects에서 어떤 이벤트가 발생했는지 Observer에게  notify 하기 위한 구독 메커니즘을 정의하게 할 수 있음.
- 한 개체의 상태를 변경해야 할 때 다른 개체를 변경할 수 있고, 실제 객체들의 정보를 잘 모르거나, 동적으로 변경되는경우 사용.

### 이해

- 옵저버 패턴에서 특정 객체를 구독할 수 있다. 구독하는 주체를 Observer, 구독 가능한 객체를 Observable이라 한다.
- 이벤트가 발생할때마다 Observable은 모든 Observer에게 이벤트를 전파한다.
- 이벤트 발생 Observable → Observer ( 이벤트 일어났습니다!! )

### 예제

- 그냥 구독시스템 → 넷플릭스, 디즈니+ 모두 구독해두면 새로운 드라마 나올때 notify 해줌.

`Observable` 객체의 특징

- observers : 이벤트가 발생할때마다 전파할 Observer들의 배열
- subscribe() : Observer를 Observer 배열에 추가한다.
- unsubscribe(): Observer 배열에서 Observer를 제거한다.
- notify() : 등록된 모든 Observer들에게 이벤트를 전파한다.

### 시나리오

- 버튼을 클릭하면 이벤트 핸들러가 Observerble class의 notify 호출
- notify는 모든 Observer에게 notify()에 들어온 데이터 전달.

```jsx
class Observable {
    constructor(){
        this.observers = []
    }

    /**
     * @param {function} observer - 구독할 옵저버. (함수)
     */
    subscribe(observer){
        this.observers.push(observer);
    }
    
    unsubscribe(observer){
        this.observers = this.observers.filter((elem) => elem !== observer);
    }

    notify(data){
        this.observers.forEach(observer => observer(data)); // ?? 
    }
}

export default new Observable();
/*
사용자가 click이나 toggle 호출시에 핸들러가 Observable의 notify 호출.
notify는 등록된 모든 Observer에게 handleClick 혹은 handleToggle 에서 전달된 데이터를 포함한 이벤트를 전파한다.
*/

--------
import observable from "./observer.js"

const button = document.createElement('button')
button.setAttribute('style','background-color:blue; color:white; width:50px')
button.textContent = 'Click Me!'
button.addEventListener('click', () => {
    observable.notify("User click button");
})

export default button;
-------

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

```

### Pros

- 관심사 분리, SRP 원칙을 강제하기 위한 좋은 방법
    - SRP (클래스를 변경하는 이유는 단 하나여야만 한다)
    - Car class에는 엑셀,브레이크만 있어야지 drive()는 Driver Class의 역할이다.
- Observable과 Observer는 강결합이 아니고, unsubscribe를 통해서 언제든 분리 가능.
- runtime에 relation 형성 가능. (알림받지 않음 이런거 눌러서 unsubscribe)
---
- Observable (모니터링 역할)
- Observer (데이터 처리 역할)

### Cons

- 구독자들이 random order로 알림을 받는다. (비동기일경우)
- Observer가 복잡해지면, 모든 Observer에게 알림을 전파하는 데 성능 이슈 발생 가능성,

### TODO

- 여러개의 독립적인 Observable을 만든다면?