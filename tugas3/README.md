# Membuat Web App dengan Express dan Sequelize 

Buatlah sebuah website menggunakan express js. Adapun fitur yang harus dibuat.

- Login dan Logout
- Crud User, kolomnya : username, password, name, gender. Gender harus menggunakan select.
- username harus unique, artinya tidak boleh ada username yang sama dalam satu table.
- Validasi Password. Ketentuan Password, minimal 6 karakter, maksimum 12 karakter, harus mempunyai minimal satu huruf besar, tidak boleh mengandung spasi, harus mempunyai minimal 1 angka, harus mempunyai minimal 1 spesial karakter seperti !$%& , tidak boleh mengandung huruf yang sama, misal sudah menggunakn huruf 'i' maka tidak boleh menggunakn huruf 'i' lagi.
- Password harus di enkripsi menggunakn bcrypt.
