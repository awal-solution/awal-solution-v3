export const Env = Object.freeze({
  apiUrl: import.meta.env.VITE_API_URL ?? '',
  apiPrefix: import.meta.env.VITE_API_PREFIX ?? '',
  uploadUrl: import.meta.env.VITE_UPLOAD_URL ?? '',
  imgUrl: import.meta.env.VITE_IMG_URL ?? ''
});
