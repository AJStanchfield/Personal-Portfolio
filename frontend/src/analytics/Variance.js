import { memo, useCallback } from "react";
import "./analytics.css";

const Variance = ({ current, prior }) => {

	const format = useCallback(() => {
		let percent;
        if (current !== 0) {
            if (prior !== 0) {
                percent = (current - prior) / prior;
            } else {
                percent = current;
            }
        } else {
            percent = 0;            
        }       
        return (current > prior ? "+" : "") + percent?.toLocaleString('en-US', {
          style: 'percent',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
	}, [current, prior])

	let className = "change neutral-change"
	if (current > prior) {
		className = "change positive-change"
	} else if (current < prior) {
		className = "change negative-change"
	}

  return (
    <span className={className}>
    	{!prior ? "N/A" : format(current, prior)}
    </span>
  )
};

export default memo(Variance);