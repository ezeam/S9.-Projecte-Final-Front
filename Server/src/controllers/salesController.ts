import Sale from "../models/sales";

export const getSales = async (): Promise<Sale[]> => {
  return await Sale.findAll();
};

export const getSaleById = async (id: number): Promise<Sale | null> => {
  return await Sale.findByPk(id);
};

export const createSale = async (sale: Omit<Sale, 'id'>): Promise<Sale> => {
  return await Sale.create(sale);
};

export const updateSale = async (id: number, sale: Omit<Sale, 'id'>): Promise<[number, Sale[]]> => {
  const [affectedCount, affectedRows] = await Sale.update(sale, {
    where: { id },
    returning: true // Necesario para obtener las filas actualizadas en la respuesta
  });

  return [affectedCount, affectedRows as Sale[]]; // Asegúrate de que affectedRows sea tratado como Sale[]
};

export const deleteSale = async (id: number): Promise<void> => {
  await Sale.destroy({
    where: { id }
  });
};

