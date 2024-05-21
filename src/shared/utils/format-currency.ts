type FormatCurrentParams = {
  amount: number;
};

export const formatCurrency = ({ amount }: FormatCurrentParams) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
