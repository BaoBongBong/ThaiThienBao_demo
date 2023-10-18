const buttons = document.querySelectorAll('.show-content');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => {
      content.classList.remove('active');
    });

    contents[index].classList.add('active');
    updateUserInfo(); // Hiển thị thông tin họ tên và tuổi khi nhấp nút
  });
});

const nameInput = document.getElementById('name');
const birthdateInput = document.getElementById('birthdate');
const userInfo = document.getElementById('userInfo');
const userInfoContent = document.getElementById('userInfoContent');

nameInput.addEventListener('input', updateUserInfo);
birthdateInput.addEventListener('change', updateUserInfo);

function updateUserInfo() {
  const name = nameInput.value;
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear();

  userInfo.innerHTML = `Họ tên: ${name},<br>Tuổi: ${age} tuổi`;

  // Hiển thị cùng lúc đoạn nội dung tuổi và họ tên khi có dữ liệu
  if (name || birthdateInput.value) {
    userInfoContent.classList.add('active');
  } else {
    userInfoContent.classList.remove('active');
  }
}