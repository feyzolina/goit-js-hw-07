const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        return alert("All form fields must be filled in!");
    }

    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
}


// form.login - form formunun gönderilmesi submit olayıyla gerçekleşmelidir.
// Form gönderilirken sayfa yeniden yüklenmemelidir.
// Gönderim sırasında formda doldurulmamış alanlar varsa, 'All form fields must be filled in'
// uyarısını içeren bir alert ile çıkış uyarı oluşturun yapın.Inputlara required niteliği eklemeyin,
// doğrulama JS aracılığıyla yapılmalıdır.

// Kullanıcı tüm alanları doldurur ve formu gönderirse, alan değerlerini iki özellikli bir nesneye toplayın;
//  anahtar alan adları olmalı ve değerler, bu alan adlarının karşılık gelen değerleri, kenarlardaki boşluklardan
// temizlenmelidir.Form öğelerine erişmek için elements özelliğini kullanın.

// Form gönderildiğinde, girilen verilerle bir nesne konsola yazdırılmalı ve reset metodu ile form alanlarının değerleri temizlenmelidir.