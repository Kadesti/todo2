import { Single } from '../StyleComponent/ItemStyle'

const SingleItem = ({ text, isDone }) => {
    return (
        <Single>
            {
                isDone
                    ? <div>{text}</div>
                    : <div className='done'> <div> {text} </div> </div>
            }
        </Single>
    )
}

export default SingleItem;
