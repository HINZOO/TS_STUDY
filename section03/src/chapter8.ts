/**
 *  서로소 유니온 타입
 *  교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모였습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
type User = Admin | Member | Guest;

 function login(user:User){//tag 프로퍼티를 통해 직관적으로 가독성 높은 코드작성가능
  switch(user.tag){
    case "ADMIN": 
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}모였습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
      break;  
  }


  // if(user.tag === "ADMIN"){
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // }else if(user.tag === "MEMBER"){
  //   console.log(`${user.name}님 현재까지 ${user.point}모였습니다.`);
  // } else{
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  // }
 }

 /**
  * 복습겸 한가지 더 사례
  */

 //비동기 작업의 결과를 처리하는 객체
 type LodingTask = {
  state : "LOADING"
 }
 type FailedTask={
  state : "FAILED";
  error : {
    message:string;
  }
 }
 type SuccessTask={
  state : "SUCCESS";
  response : {
    data:string;
  }
 } 
 type AsyncTask =  LodingTask | FailedTask | SuccessTask;

//  type AsyncTask = {
//     state : 'LOADING' | 'FAILED' | 'SUCCESS';
//     error?: {
//       message: string;
//     };
//     response?: {
//       data: string;
//     }
//  }

//로딩중 -> 콘솔에 로딩중 출력
//실패 -> 실패 :에러메세지 출력
//성공 -> 성공: 데이터를 출력
function processResult(task: AsyncTask){
  switch(task.state){
    case "LOADING":
      console.log("로딩중~");
      break;
    case "FAILED":
      console.log(`에러발생 : ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공 : ${task.response.data}`);
      break; 
  }
}

 const loading: AsyncTask = {
  state : "LOADING",
 };

 const failed: AsyncTask = {
  state : "FAILED",
  error : {
    message: "오류 발생 원인은 ~~ 입니다."
  },
 }

const success: AsyncTask = {
  state : "SUCCESS",
  response : {
    data : "데이터~~"
  }
}