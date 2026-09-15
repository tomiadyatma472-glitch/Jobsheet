const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Data berhasil diambil");
  else reject("Terjadi error");
});

promise
  .then(result => console.log("a. Then:", result))
  .catch(error => console.error("a. Catch:", error))
  .finally(() => console.log("a. Finally: Selesai, apa pun hasilnya"));

// Contoh kedua — simulasi gagal, untuk lihat alur .catch()
const failedPromise = new Promise((resolve, reject) => {
  const success = false;
  if (success) resolve("Data berhasil diambil");
  else reject("Terjadi error saat mengambil data");
});

failedPromise
  .then(result => console.log("b. Then:", result))
  .catch(error => console.error("b. Catch:", error))
  .finally(() => console.log("b. Finally: Selesai, apa pun hasilnya"));