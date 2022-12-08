// li로 구현
// rating value - two CardNumRating/ rating info - comments(div)
import CardNumRating from './CardNumRating';
import Comment from './Comment';


function ResidentRatingTabs(props) {
    return(
    <div>
        <CardNumRating title="QUALITY" rate={props.quality_rate}></CardNumRating>
        <CardNumRating title="DIFFICULTY" rate={props.difficulty_rate}></CardNumRating>
        <Comment />
    </div>
    )
}

export default ResidentRatingTabs;