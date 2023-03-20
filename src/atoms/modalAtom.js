import { atom } from "recoil";

/** 댓글 모달 */
export const commentModalAtom = atom({
  key: "commentModal",
  default: false,
});

/** 포스트 수정 모달 */
export const postConfigModalAtom = atom({
  key: "postConfigModal",
  default: false,
});

/** 나의 맛집리스트 편집 모달 */
export const myListConfigModal = atom({
  key: "myListConfigModal",
  default: false,
});

/** 나의 맛집리스트 수정 모달 */
export const myListEditModal = atom({
  key: "myListEditModal",
  default: false,
});
