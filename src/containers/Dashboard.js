import {connect} from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        user: state.user
    }
}

// wrap the visual React Component "Home" with the Redux Container Component Home
export default connect(mapStateToProps)(Dashboard)