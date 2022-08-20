import {connect} from 'react-redux'
import Car from '../components/Car'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

// wrap the visual React Component "Home" with the Redux Container Component Home
export default connect(mapStateToProps)(Car)