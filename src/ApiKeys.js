const BASE_URL = "http://localhost:5000/";

const apiConst = {
  send_otp_to_user_register: `${BASE_URL}user/send_otp_to_user`,
  signup: `${BASE_URL}user/signup`,
  login: `${BASE_URL}user/login`,
  send_otp_login: `${BASE_URL}user/send_otp_to_user_for_login`,
};

export default apiConst;
