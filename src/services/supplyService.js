import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8091/abastecimento/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  createSupply(data) {
    return api.post("/supplies", data);
  },

  getSupplies(params) {
    return api.get("/supplies", { params });
  },

  getSupplyById(id) {
    return api.get(`/supplies/${id}`);
  },

  getTotals() {
    return api.get("/supplies/totals");
  }
};