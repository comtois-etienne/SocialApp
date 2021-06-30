import axios from "axios";

class APIV1 {
  constructor(baseUrl) {
    this.__baseUrl = baseUrl;
  }

  async addPublication(publication) {
    const result = await axios.post(`${this.__baseUrl}/v1/publications`, publication);
    return result;
  }
}

export default APIV1;
