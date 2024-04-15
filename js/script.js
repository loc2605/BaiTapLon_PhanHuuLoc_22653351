var currentSlide = 0;
var listSP = [
  (sp1 = {
    id: 1,
    ten: "Bút Bi Thiên Long nhiều màu",
    hinh: "../img/ButThienLong.jpg",
    gia: 4000,
  }),
  (sp2 = {
    id: 2,
    ten: "Sổ Tay Lò Xo Ghi Chép A5",
    hinh: "../img/SoTay.jpg",
    gia: 25000,
  }),
  (sp3 = {
    id: 3,
    ten: "Set 50 Tờ Giấy Ghi Chú Mini",
    hinh: "../img/GiayNote.jpg",
    gia: 7000,
  }),
  (sp4 = {
    id: 4,
    ten: "Vở Kẻ Ngang 200 Trang",
    hinh: "../img/Tap.jpg",
    gia: 12000,
  }),
  (sp5 = {
    id: 5,
    ten: "Bút Bi Nước Mực Gel MEKI",
    hinh: "../img/ButGel.jpg",
    gia: 25000,
  }),
  (sp6 = {
    id: 6,
    ten: "Bút Chì Lục Giác 2B MEKI",
    hinh: "../img/ButChi.jpg",
    gia: 2000,
  }),
  (sp7 = {
    id: 7,
    ten: "Bút Đánh Dấu Highlight",
    hinh: "../img/ButDa.png",
    gia: 8200,
  }),
  (sp8 = {
    id: 8,
    ten: "Ống Hộp Đựng Bút Trong Suốt",
    hinh: "../img/HopDungBut.png",
    gia: 38300,
  }),
  (sp9 = {
    id: 9,
    ten: "Bìa Đựng Tài Liệu A4",
    hinh: "../img/BiaDungTaiLieu.jpg",
    gia: 18400,
  }),
  (sp10 = {
    id: 10,
    ten: "Kẹp Tài Liệu Giấy Tờ Văn Phòng",
    hinh: "../img/KepGiay.jpg",
    gia: 1000,
  }),
  (sp11 = {
    id: 11,
    ten: "Dao Rọc Giấy Chân Mèo Classy",
    hinh: "../img/DaoRocGiay.png",
    gia: 11000,
  }),
  (sp12 = {
    id: 12,
    ten: "Dây Đeo Thẻ Nhân Viên, Học Sinh",
    hinh: "../img/TheDeo.jpg",
    gia: 6750,
  }),
];
sessionStorage.setItem("listSP", JSON.stringify(listSP));
var slides = document.querySelectorAll(".slide");

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[n].classList.add("active");
  currentSlide = n;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

var intervalId = setInterval(nextSlide, 3000);

document.querySelector(".slider").addEventListener("mouseover", function () {
  clearInterval(intervalId);
});

document.querySelector(".slider").addEventListener("mouseout", function () {
  intervalId = setInterval(nextSlide, 5000);
});
function prev() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function next() {
  currentSlide = (currentSlide + 1) % slides.length;
  if (currentSlide === 0) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function Search() {
  var dropdown = document.getElementById("form-search");
  if (dropdown.style.maxHeight === "50px") {
    dropdown.style.maxHeight = "0px";
  } else {
    dropdown.style.maxHeight = "50px";
  }
}

function plus() {
  n = document.getElementById("quantity");
  n.innerText = parseInt(n.innerText) + 1;
}

function minus() {
  n = document.getElementById("quantity");
  if (parseInt(n.innerText) > 1) n.innerText = parseInt(n.innerText) - 1;
}
function themsl(id) {
  cart = {
    id: id,
    sl: document.getElementById("quantity").innerText,
  };
  sessionStorage.setItem(id, JSON.stringify(cart));
}

function checkTenDangNhap() {
  let ten = document.getElementById("tendangnhap").value;
  if (ten == "") {
    document.getElementById("errortenDN").innerHTML =
      "Tên đăng nhập không được trống";
    return false;
  } else {
    let regex = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()-_]+$/;
    if (regex.test(ten)) {
      document.getElementById("errortenDN").innerHTML = "*";
      return true;
    } else {
      document.getElementById("errortenDN").innerHTML =
        "Phải bắt đầu bằng ký tự";
      return false;
    }
  }
}

function checkMatKhau() {
  let matkhau = document.getElementById("password").value;
  if (matkhau == "") {
    document.getElementById("errormk").innerHTML = "Mật khẩu không được rỗng";
    return false;
  } else {
    let regex =
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()-_])[a-zA-Z0-9!@#$%^&*()-_]{8,}$/;
    if (regex.test(matkhau)) {
      document.getElementById("errormk").innerHTML = "*";
      return true;
    } else {
      document.getElementById("errormk").innerHTML =
        "Phải có ít nhất 1 ký tự hoa, 1 số, 1 ký tự đặc biệt và trên 8 ký tự";
      return false;
    }
  }
}

function checkLaiMatKhau() {
  let matkhaunhaplai = document.getElementById("password-confirm").value;
  if (matkhaunhaplai == "") {
    document.getElementById("errormkre").innerHTML = "Phải nhập lại mật khẩu";
    return false;
  }
  let matkhau = document.getElementById("password").value;
  if (matkhau == matkhaunhaplai) {
    document.getElementById("errormkre").innerHTML = "*";
    return true;
  } else {
    document.getElementById("errormkre").innerHTML = "Không trùng khớp";
    return false;
  }
}

function checkHoTen() {
  let hoTen = document.getElementById("HoVaTen").value;
  if (hoTen == "") {
    document.getElementById("erorrhoten").innerHTML =
      "Họ và tên không được rỗng";
    return false;
  } else {
    let regex = /^[A-Z][a-zA-Z\s]+ [A-Z][a-zA-Z\s]+$/;
    if (regex.test(hoTen)) {
      document.getElementById("erorrhoten").innerHTML = "*";
      return true;
    } else {
      document.getElementById("erorrhoten").innerHTML = "Sai cú pháp đặt tên";
      return false;
    }
  }
}

function checkNgaySinh() {
  const ngaySinh = document.getElementById("ngaySinh").value;
  const birthday = new Date(ngaySinh);
  const today = new Date();
  if (birthday.getTime() < today.getTime()) {
    document.getElementById("erorrngaysinh").innerHTML = "*";
    return true;
  } else {
    document.getElementById("erorrngaysinh").innerHTML =
      "Ngày sinh không hợp lệ";
    return false;
  }
}

function checkSDT() {
  let sdt = document.getElementById("sdt").value;
  if (sdt == "") {
    document.getElementById("erorrsdt").innerHTML =
      "Số điện thoại không được rỗng";
    return false;
  } else {
    let regex = /^08\d{8}$/;
    if (regex.test(sdt)) {
      document.getElementById("erorrsdt").innerHTML = "*";
      return true;
    } else {
      document.getElementById("erorrsdt").innerHTML =
        "Gồm 10 số và bắt đầu là 08";
      return false;
    }
  }
}
function checkDiaChi() {
  let diaChi = document.getElementById("diaChi").value;
  if (diaChi == "") {
    document.getElementById("erdiachi").innerHTML = "Địa chỉ không được rỗng";
    return false;
  } else {
    document.getElementById("erdiachi").innerHTML = "*";
    return true;
  }
}

function checkEmail() {
  let email = document.getElementById("email").value;
  if (email == "") {
    document.getElementById("erorremail").innerHTML = "Email không được rỗng";
    return false;
  } else {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      document.getElementById("erorremail").innerHTML = "*";
      return true;
    } else {
      document.getElementById("erorremail").innerHTML = "Sai cú pháp emails";
      return false;
    }
  }
}

function DangKy() {
  if (
    checkTenDangNhap() &&
    checkMatKhau() &&
    checkLaiMatKhau() &&
    checkHoTen() &&
    checkNgaySinh() &&
    checkSDT() &&
    checkDiaChi() &&
    checkEmail()
  ) {
    let email = document.getElementById("email").value;
    let mk = document.getElementById("password").value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", mk);
    alert("Đăng ký thành công");
  } else {
    alert("Vui lòng điền đủ thông tin và đúng cú pháp trước khi đăng ký");
  }
}
function DangNhap() {
  let emailDN = document.getElementById("emailDN").value;
  let matkhauDN = document.getElementById("passwordDN").value;
  let email = localStorage.getItem("email");
  let mk = localStorage.getItem("password");
  if (emailDN === email && matkhauDN === mk) {
    alert("Đăng nhập thành công");
    $("#myModal").modal("hide");
  } else {
    alert("Email hoặc mật khẩu không hợp lệ");
  }
}

function remove_product(id) {
  var removedPrice = parseInt(
    document.getElementById("total_price" + id).innerText.substring(0)
  );

  var table = document.getElementById("tblcart");
  var rowToRemove = document.getElementById(id);
  table.deleteRow(rowToRemove.rowIndex);

  total_bill -= removedPrice;
  document.getElementById("shoppingcart").innerHTML =
    "<div class='total_bill' id='total_bill'>Tổng cộng: $" +
    total_bill +
    "</div>";

  sessionStorage.removeItem(id);
}

function buy() {
  var cart = document.getElementById("tblcart");
  if (cart.rows.length > 1) {
    alert("Mua hàng thành công");
    reset();
  } else {
    alert("Không có sản phẩm nào trong giỏ hàng");
  }
}
function deleteTable() {
  var table = document.getElementById("tblcart");
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}
function reset() {
  sessionStorage.clear();
  deleteTable();
  total_bill = 0;
  document.getElementById("shoppingcart").innerHTML =
    "<div class='total_bill' id='total_bill'>Tổng cộng: 0</div>";
}

let nav = document.getElementById("nav-bar");
let nav_rps = document.getElementById("responsive");

nav_rps.onclick = function () {
  let isClose = nav.style.zIndex;
  if (isClose == 0) {
    nav.style.zIndex = 1;
    nav.style.top = "50px";
  } else {
    nav.style.zIndex = 0;
    nav.style.top = "-500px";
  }
};
