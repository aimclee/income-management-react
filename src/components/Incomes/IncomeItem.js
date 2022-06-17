import IncomeDate from "./IncomeDate";
import "./IncomeItem.css";
import Card from '../UI/Card'
// props contain the value of title, amount and date @Incomes.js's <IncomeItem>
function IncomeItem(props) {


	return (
		<Card className="expense-item">
			<IncomeDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount} won</div>
			</div>
		</Card>
	);
}

export default IncomeItem;
