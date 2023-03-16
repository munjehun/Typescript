interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emails: { value: string; selected: boolean }[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: { value: number; selected: boolean }[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 드롭다운 옵션 만드는 함수
function createDropdownItem<T extends { toString: Function }>(
  item: DropdownItem<T>
) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  if (selectTag) selectTag.appendChild(item);
});
