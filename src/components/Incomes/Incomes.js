import "./Incomes.css";
import IncomeItem from "./IncomeItem";
import Card from "../UI/Card"
function Incomes(props) {
	return (
		<Card className="expenses">
			<IncomeItem
				title={props.items[0].title}
				amount={props.items[0].amount}
				date={props.items[0].date}
			/>
			<IncomeItem
				title={props.items[1].title}
				amount={props.items[1].amount}
				date={props.items[1].date}
			/>
			<IncomeItem
				title={props.items[2].title}
				amount={props.items[2].amount}
				date={props.items[2].date}
			/>
			<IncomeItem
				title={props.items[3].title}
				amount={props.items[3].amount}
				date={props.items[3].date}
			/>
		</Card>
	);
}

export default Incomes;
