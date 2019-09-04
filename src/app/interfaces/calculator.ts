/**
 * @param cantOrderFood cantidad de pedido
 * @param cantSoda cantidad de refrescos
 * @param totalPrice total a pagar
 * @param rode monto pagado
 * @param change cambio
 */
export interface Calculator {
  cantOrderFood?: number;
  cantSoda?: number;
  totalPrice?: number;
  rode?: number;
  change?: number;
}
