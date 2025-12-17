import { memo, useCallback } from "react";

const FormattedCurrency = ({ amount }) => {

	const format = useCallback(() => {
		return amount.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
	}, [amount])

  return (
    <span>${format(amount)}</span>
  )
};

export default memo(FormattedCurrency);