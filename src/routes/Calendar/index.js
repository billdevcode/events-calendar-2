import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'calendar',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Calendar = require('./layouts/CalendarLayout').default
      const reducer = require('./modules/calendar').default
      
      injectReducer(store, { key: 'calendar', reducer })

      /*  Return getComponent   */
      cb(null, Calendar)

    /* Webpack named bundle   */
    }, 'calendar')
  }
})
