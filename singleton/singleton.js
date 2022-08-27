let count = 0;
let instance;

const counter = {

    increment(){
        ++count;
    },
    
    decrement(){
        --count;
    },

    getCount(){
        return count;
    }
};


// class Counter {
//     constructor(){
//         if(instance){
//             throw new Error('오직 한개의 인스턴스만 만들 수 있습니다.')
//         }
//         instance = this;
//     }

//     // 메서드 인스턴스 자체를 반환.
//     getInstance() {
//         return this;
//     }

//     getCount() {
//         return count;
//     }

//     increment() {
//         return ++count;
//     }

//     decrement() {
//         return --counter;
//     }
// }
// 핵심은 인스턴스를 단 한번만 만들 수 있어야 한다. -> 이건 여러번 만들기 가능

// const counter1 = new Counter(); // 클래스 반환, 이거 freeze
// const counter2 = new Counter();
const singletonCounter = Object.freeze(counter);
export default singletonCounter;

/**
 * Counter class가 어떻게 한 번만 만들어지게 할 것인가?
 * instance 변수를 만들어서, 생성자에서 instance가 매번 새로운 인스턴스를 가리키게 한다.
 */





