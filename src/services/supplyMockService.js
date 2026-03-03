import supplies from "../mocks/suppliesMock.json";

let mockDatabase = [...supplies];

const simulateDelay = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export default {

  async getSupplies({ page = 1, size = 5, plate, driverId}) {

    let filtered = [...supplies];

    if (plate) {
      filtered = filtered.filter(s =>
        s.plate.toLowerCase().includes(plate.toLowerCase())
      );
    }

    if (driverId) {
      filtered = filtered.filter(s => s.driverId == driverId);
    }

    const start = (page - 1) * size;
    const end = start + size;

    return simulateDelay({
      content: filtered.slice(start, end),
      totalElements: filtered.length,
      totalPages: Math.ceil(filtered.length / size)
    });
  },

  async getSupplyById(id) {
    const supply = supplies.find(s => s.id === Number(id));
    
    if (!supply) {
      throw new Error("Not found");
    }

    return simulateDelay(supply);
  },

  async createSupply(data) {
    const newSupply = {
      ...data,
      id: mockDatabase.length + 1,
      status: "PENDING",
      date: new Date().toISOString().split("T")[0]
    };

    mockDatabase.push(newSupply);

    return simulateDelay(newSupply);
  },

  async getTotals() {
    const totalLiters = mockDatabase.reduce((sum, s) => sum + s.liters, 0);
    const totalValue = mockDatabase.reduce(
      (sum, s) => sum + s.liters * s.pricePerLiter,
      0
    );

    return simulateDelay({
      totalLiters,
      totalValue
    });
  }
};