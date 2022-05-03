export const calcSubtotal = (order) => (
  order
    .map(({ product: { price }, count }) => price * count)
    .reduce((prevPrice, currPrice, _, order) => order.length ? prevPrice + currPrice : 0, 0)
)

export const getOrderUrl = (fullName, address, order, restaurant) => {
  const subtotal = calcSubtotal(order);

  const orderStr = order.map(({ product: { name, price }, count, notes }) => {
    const notesStr = notes ? `_*(${notes})*_ ` : '';

    return `- ${name} x${count} ${notesStr}= $${price * count}%0A`
  }).join('')

  console.log(orderStr)

  return `https://api.whatsapp.com/send?phone=+5491123913985&text=*Pedido%20a%20${restaurant.name}*%0A%0A*Cliente:*%20${fullName}%0A*Dirección:*%20${address}%0A%0A*Orden:*%0A${orderStr}%0A*Total:*%20$${subtotal}`
}