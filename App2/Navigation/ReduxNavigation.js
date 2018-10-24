import React from 'react'
import { BackHandler, Platform } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

class ReduxNavigation extends React.Component {
  componentWillMount () {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && (nav.routes[0].routeName === 'LaunchScreen')) {
        return false
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true
    })
  }

  componentWillUnmount () {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render () {
    // const App = reduxifyNavigator(<AppNavigation navigation={{
    //     dispatch: this.props.dispatch,
    //     state: this.props.nav,
    // }} />, 'root')
    //   return <App/>
    return <AppNavigation navigation={{
      // addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          // addListener: reduxifyNavigator('root')
      // })
    }} />
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { nav: state.nav }
}
export default connect(mapStateToProps)(reduxifyNavigator(ReduxNavigation, 'root'))
