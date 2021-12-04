function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
    return deliveryOrders.push(newOrder)
  }
 }

function refundOrder(orderNum, orderList) {
  for (var i = 0; i < orderList.length; i++) {

    if (orderList[i].orderNumber === orderNum) {
      return orderList.splice(i,1)
    }
  }
}

function listItems(orders) {
  var temp = []
  for (var i = 0; i < orders.length; i++){
    // return orders[i].item
    temp.push(orders[i].item)

  }
  return temp.join(", ")
}

function searchOrder(orders, orderItem) {
  var temp  = [];
  for (var i = 0; i < orders.length; i++) {
    temp.push(orders[i].item)
  }
if(temp.includes(orderItem)){
  return true
} else {
  return false
 }
}

module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}
