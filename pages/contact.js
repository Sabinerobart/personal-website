import { Button } from '../mui-imports';
import Link from '../src/Link';

const Contact = () => {
  return (
    <>
      <p>Place contact form here</p>
      <Button variant="contained" color="primary" component={Link} naked href="/">
        Go to Homepage
      </Button>
    </>
  )
}

export default Contact;