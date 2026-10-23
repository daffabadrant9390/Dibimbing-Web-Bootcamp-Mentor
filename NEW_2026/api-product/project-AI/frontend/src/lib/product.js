export const MAX_PHOTOS = 3;

export const rupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });

export function formatPrice(price) {
  return rupiah.format(price);
}

export function errorMessage(error) {
  if (error.status === 404 || error.problem?.type?.endsWith('/product-not-found')) {
    return 'Produk tidak ditemukan atau sudah dihapus.';
  }
  if (error.status === 400 && error.problem?.type?.endsWith('/invalid-product-id')) {
    return 'ID produk tidak valid.';
  }
  if (error.status === 400) return 'Data yang dikirim belum valid. Periksa kembali formulir.';
  if (error.status >= 500) return 'Server sedang mengalami gangguan. Silakan coba lagi nanti.';
  return error.message || 'Terjadi kesalahan jaringan. Silakan coba lagi.';
}

export function fieldErrors(problem) {
  return (problem?.errors || []).reduce((result, item) => {
    if (item.field && item.message) result[item.field] = item.message;
    return result;
  }, {});
}

function isHttpUrl(value) {
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

export function validateProductInput(values) {
  const errors = {};
  const name = values.name.trim();
  const description = values.description.trim();
  const variants = values.variants.split(',').map((item) => item.trim()).filter(Boolean);
  const price = Number(values.price);
  const quantity = Number(values.quantity);
  // Foto tambahan (selain foto utama); input kosong diabaikan.
  const images = (values.images || []).map((item) => item.trim()).filter(Boolean);

  if (!name || name.length > 120) errors.name = 'Nama wajib diisi dan maksimal 120 karakter.';
  if (!Number.isInteger(price) || price < 0) errors.price = 'Harga harus berupa bilangan bulat tidak negatif.';
  if (!isHttpUrl(values.image)) errors.image = 'Foto utama wajib diisi dengan URL HTTP atau HTTPS yang valid.';
  if (images.some((item) => !isHttpUrl(item))) errors.images = 'Setiap link foto harus berupa URL HTTP atau HTTPS yang valid.';
  if (images.length > MAX_PHOTOS - 1) errors.images = `Maksimal ${MAX_PHOTOS} foto per produk.`;
  if (!variants.length || variants.some((item) => item.length > 50)) errors['variants.colorOrSize'] = 'Masukkan minimal satu variasi, maksimal 50 karakter per variasi.';
  if (new Set(variants.map((item) => item.toLowerCase())).size !== variants.length) errors['variants.colorOrSize'] = 'Variasi tidak boleh duplikat.';
  if (!Number.isInteger(quantity) || quantity < 0) errors['variants.quantity'] = 'Jumlah stok harus berupa bilangan bulat tidak negatif.';
  if (!description || description.length > 2000) errors.description = 'Deskripsi wajib diisi dan maksimal 2.000 karakter.';

  return { errors, input: { name, price, image: values.image.trim(), images, variants: { colorOrSize: variants, quantity }, description } };
}
