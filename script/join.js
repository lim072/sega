let toggle = document.querySelector("#toggle");
let pass1 = document.querySelector("#pass1");

let form = document.querySelector("#member");
let submit = document.querySelector("input[type=submit]");

toggle.addEventListener("click", () => {
  if (pass1.type === "password") {
    pass1.setAttribute("type", "text");
    toggle.classList.add("hide");
  } else {
    pass1.setAttribute("type", "password");
    toggle.classList.remove("hide");
  }
});

submit.addEventListener("click", (e) => {
  if (!isText("userid", 5)) e.preventDefault();
  if (!isMail("email")) e.preventDefault();
  if (!isCheck("gender")) e.preventDefault();
  if (!isPwd("pass1", "pass2", 8)) e.preventDefault();
});

function isText(el, len) {
  if (len === undefined) len = 5;

  let input = form.querySelector(`[name=${el}]`);
  let txt = input.value;

  if (txt.length >= len) {
    const isErrMsg = input.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) input.closest("td").querySelector("p").remove();
    return true;
  } else {
    const isErrMsg = input.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append(`입력항목을 ${len}글자 이상 입력하세요.`);
    input.closest("td").append(errMsg);
    return false;
  }
}

function isMail(el) {
  let input = form.querySelector(`[name=${el}]`);
  let txt = input.value;

  if (/@/.test(txt)) {
    const isErrMsg = input.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) input.closest("td").querySelector("p").remove();
    return true;
  } else {
    const isErrMsg = input.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append(`@를 포함한 전체 이메일 주소를 입력하세요.`);
    input.closest("td").append(errMsg);
    return false;
  }
}

function isCheck(el) {
  let input = form.querySelectorAll(`[name=${el}]`);
  let isCheck = false;

  for (let el of input) {
    if (el.checked) isCheck = true;
  }
  if (isCheck) {
    const isErrMsg = input[0].closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) input[0].closest("td").querySelector("p").remove();
    return true;
  } else {
    const isErrMsg = input[0].closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append(`필수 입력 항목을 체크해주세요.`);
    input[0].closest("td").append(errMsg);
    return false;
  }
}

function isPwd(el1, el2, len) {
  let pwd1 = form.querySelector(`[name=${el1}]`);
  let pwd2 = form.querySelector(`[name=${el2}]`);
  let pwd1_val = pwd1.value;
  let pwd2_val = pwd2.value;

  const num = /[0-9]/;
  const eng = /[a-zA-Z]/;
  const spc = /[~!@#$%^&*()_+|]/;

  const errMsgWrap = pwd1.closest("td");

  function removeErrMsg() {
    const errMsg = errMsgWrap.querySelector("p");
    if (errMsg) {
      errMsg.remove();
    }
  }

  function okErrMsg() {
    const errMsg = errMsgWrap.querySelector("span");
    if (errMsg) {
      errMsg.remove();
    }
  }

  function addErrMsg(msg) {
    const errMsg = document.createElement("p");
    errMsg.textContent = msg;

    errMsgWrap.append(errMsg);
  }
  function addOkMsg(msg) {
    const errMsg = document.createElement("span");
    errMsg.textContent = msg;
    errMsgWrap.append(errMsg);
  }

  if (
    pwd1_val === pwd2_val &&
    pwd1_val.length >= len &&
    eng.test(pwd1_val) &&
    num.test(pwd1_val) &&
    spc.test(pwd1_val)
  ) {
    okErrMsg();
    removeErrMsg();
    let ok = "비밀번호가 일치 합니다.";
    addOkMsg(ok);
    return true;
  } else {
    okErrMsg();
    removeErrMsg();

    let err = "비밀번호는 ";
    if (pwd1_val.length < len) {
      err += `${len}글자 이상,`;
    }
    if (!num.test(pwd1_val)) {
      err += "숫자를 포함,";
    }
    if (!eng.test(pwd1_val)) {
      err += "영어를 포함,";
    }
    if (!spc.test(pwd1_val)) {
      err += "특수문자를 포함,";
    }

    err += "동일하게 입력하세요";
    addErrMsg(err);
    return false;
  }
}
