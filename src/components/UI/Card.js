import './Card.css'

function Card(props){
    // custom component에서는 className을 따로 지정해줘야 한다.
    // 'card '는 항상 포함되는 class 값이고, props.className은 밖에서 className으로 받는 것들은 문자열로 추가된다.  
    const classes = 'card ' + props.className; 
    return <div className={classes}>{props.children}</div>;
}

export default Card;