import ListGroup from 'react-bootstrap/ListGroup'
import {Pasta} from '../Typings';

interface dishCommentsProps{
  selectedDish: Pasta
}

const DishComments = ({selectedDish}: dishCommentsProps) => (
  <ListGroup>
    {selectedDish ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
