/**
 * 프로미스
 */

import { resolve } from "path";

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  console.log(post.id);
});
