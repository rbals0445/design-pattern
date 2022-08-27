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