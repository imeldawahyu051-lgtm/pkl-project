function kalkulator(angka1, angka2, operator) {
  let hasil;

  // Cek operator menggunakan kondisinal (if/else atau switch)
  switch (operator) {
    case '+':
      hasil = angka1 + angka2;
      break;
    case '-':
      hasil = angka1 - angka2;
      break;
    case '*':
      hasil = angka1 * angka2;
      break;
    case '/':
      // Validasi pembagian dengan angka 0
      if (angka2 === 0) {
        return "Error: Tidak bisa membagi angka dengan nol!";
      }
      hasil = angka1 / angka2;
      break;
    default:
      return "Error: Operator tidak valid! Gunakan +, -, *, atau /";
  }

  return hasil;
}
