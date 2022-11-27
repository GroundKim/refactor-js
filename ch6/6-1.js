export function printOwing(invoice) {
  printBanner();

  const outstanding = calcuateOutstanding(invoice);

  const dueDate = getDueDate();
  invoice.dueDate = dueDate;

  printDetails(invoice, outstanding);
}

const printBanner = () => {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
};

const calcuateOutstanding = (invoice) => {
  const result = invoice.orders
    .reduce((accumulator, currentOrder) => accumulator + currentOrder.amount, 0);
  return result;
};

const getDueDate = () => {
  let result = null;

  const today = new Date();
  result = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );

  return result;
};

const printDetails = (invoice, outstanding) => {
  // print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
