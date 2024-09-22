"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSale = exports.updateSale = exports.createSale = exports.getSaleById = exports.getSales = void 0;
const sales_1 = __importDefault(require("../models/sales"));
const getSales = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield sales_1.default.findAll();
});
exports.getSales = getSales;
const getSaleById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield sales_1.default.findByPk(id);
});
exports.getSaleById = getSaleById;
const createSale = (sale) => __awaiter(void 0, void 0, void 0, function* () {
    return yield sales_1.default.create(sale);
});
exports.createSale = createSale;
const updateSale = (id, sale) => __awaiter(void 0, void 0, void 0, function* () {
    const [affectedCount, affectedRows] = yield sales_1.default.update(sale, {
        where: { id },
        returning: true // Necesario para obtener las filas actualizadas en la respuesta
    });
    return [affectedCount, affectedRows]; // Asegúrate de que affectedRows sea tratado como Sale[]
});
exports.updateSale = updateSale;
const deleteSale = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield sales_1.default.destroy({
        where: { id }
    });
});
exports.deleteSale = deleteSale;
