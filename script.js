const inputNama = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputOption = document.getElementById('pilih-option');

const button = document.getElementById('tombol-kirim');

button.addEventListener('click', function(){
    let nama = inputNama.value;
    let email = inputEmail.value;
    let option = inputOption.value;

if(!option){
    alert('Option tidak boleh kosong')
}

if(!nama){
    const nameError = document.getElementById('name-error');
    nameError.classList.add('error-message')

    namaError.innerText = 'nama harus diisi';
}
if(!email){
    const emailError = document.getElementById('email-error');
    emailError.classList.add('error-message')

    emailError.innerText = 'email harus diisi';
)}
