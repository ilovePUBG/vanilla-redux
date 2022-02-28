// app의 state => app에서 변하는 데이터
// store => state를 관리 및 저장하기 위한 객체
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// reducer => redux store에 저장된 state를 modify하는 함수
// reducer에서 반환된 데이터가 곧 state가 된다.
// 오직 reducer만이 state를 modify할 수 있다.

// reducer의 default parameter로 initial state를 지정할 수 있다.
// 두 번째 parameter인 action은 앱 상에서 modifier를 실행하기 위한 객체로 action 별로 type을 지정할 수 있다.
const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

// redux의 createStore를 사용하면 store를 만들 수 있다.
const countStore = createStore(reducer);

// subscribe를 사용하면 store 내의 state가 변했을 때 callback을 실행할 수 있다.
// 구독하면 새로운 영상이 올라올 때마다 notice를 받을 수 있는 것처럼...
countStore.subscribe(() => {
  number.innerText = countStore.getState();
});

// action을 실행할 때는 dispatch 메서드를 사용하면 된다.
// reducer에서 action.type을 사용하여 dispatch로 발생한 action의 종류를 알 수 있다.
// dispatch를 할 때마다 현재 state와 action type 객체가 reducer의 parameter로 전달되어 reducer가 실행된다.
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
