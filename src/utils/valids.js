/** 이메일 검증 */
export const emailValid = () => ({
  required: "이메일을 입력해주세요",
  pattern: {
    value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    message: "올바른 이메일 형식을 입력해주세요.",
  },
});

/** 비밀번호 검증 */
export const passwordValid = () => ({
  required: "비밀번호를 입력해주세요.",
  maxLength: {
    value: 20,
    message: "20자리 이하로 작성해주세요",
  },
  minLength: {
    value: 8,
    message: "8자리 이상으로 작성해주세요",
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,20}$/,
    message:
      "비밀번호는 대문자, 소문자 및 특수 문자를 포함하여 8자 이상 20자이하여야 합니다.",
  },
});

/** 비밀번호 확인 검증 */
export const passwordCheckValid = (options) => ({
  required: "비밀번호를 입력해주세요.",
  maxLength: {
    value: 20,
    message: "비밀번호는 최대 20글자입니다.",
  },
  minLength: {
    value: 8,
    message: "비밀번호는 최소 8글자입니다.",
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,20}$/,
    message:
      "비밀번호는 대문자, 소문자 및 특수 문자를 포함하여 8자 이상 20자이하여야 합니다.",
  },
  ...options,
});

/** 닉네임 검증 */
export const nicknameValid = () => ({
  required: "닉네임을 입력해주세요.",
  maxLength: {
    value: 10,
    message: "20자리 이하로 작성해주세요",
  },
  minLength: {
    value: 4,
    message: "4자리 이상으로 작성해주세요",
  },
  pattern: {
    value: /^[가-힣a-z0-9A-Z]{4,20}$/,
    message: "닉네임은 한글 또는 숫자로 영문으로 입력해주세요",
  },
});

/** 이름 검증 */
export const nameValid = () => ({
  required: "닉네임을 입력해주세요.",
  maxLength: {
    value: 8,
    message: "8자리 이하로 작성해주세요",
  },
  minLength: {
    value: 2,
    message: "2자리 이상으로 작성해주세요",
  },
  pattern: {
    value: /^[가-힣]{2,8}$/,
    message: "2자 이상 8자 이하의 한글 형식이여야 합니다.",
  },
});

/** 번호 검증 */
export const telValid = () => ({
  required: "핸드폰 번호를 입력해주세요.",
  maxLength: {
    value: 11,
    message: "번호를 확인해주세요",
  },
  pattern: {
    value: /^010\d{4}\d{4}$/,
    message: "(-)없이 숫자로 형식을 맞춰주세요",
  },
});

/** 생년월일 검증 */
export const birthValid = () => ({
  required: "생년월일을 입력해주세요.",
  pattern: {
    value: /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
    message: "(-)없이 숫자로 형식을 맞춰주세요",
  },
});
