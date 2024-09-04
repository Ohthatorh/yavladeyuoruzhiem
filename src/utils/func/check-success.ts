export const checkSuccess = (res: any) => {
  if (res) {
    return res;
  }
  return Promise.reject(res.error_msg);
};
