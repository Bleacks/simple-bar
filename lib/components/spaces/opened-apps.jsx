import * as AppIcons from '../../app-icons'
import * as Utils from '../../utils'

const MAX_WINDOW_PER_SPACE = 4

const OpenedApps = ({ apps }) => {
  if (!apps.length) return null
  return Utils.sortWindows(apps).map((app, i) => {
    const {
      'is-minimized': isMinimized,
      minimized: __legacyIsMinimized,
      'has-focus': hasFocus,
      focused: __legacyHasFocus,
      app: appName,
      'is-hidden': isHidden,
      'stack-index': stackIndex,
      'has-parent-zoom': hasParentZoom,
      'zoom-parent': __legacyHasParentZoom,
      'has-fullscreen-zoom': hasFullscreenZoom,
      'zoom-fullscreen': __legacyHasFullscreenZoom
    } = app
    // if (isMinimized ?? __legacyIsMinimized) return null // 
    
    const classes = Utils.classnames('space__icon', {
      'space__icon--focused': hasFocus ?? __legacyHasFocus,
      'space__icon--fullscreen': (hasParentZoom ?? __legacyHasParentZoom) || (hasFullscreenZoom ?? __legacyHasFullscreenZoom),
      'space__icon--minimized': isMinimized || __legacyIsMinimized,
      'space__icon--hidden': isHidden,
      'space__icon--stacked': stackIndex > 0,
      'space__icon--cropped': i >= MAX_WINDOW_PER_SPACE
    })
    var res = Array()
    if (i == 4) {
      const Icon = AppIcons.apps['Unfold'] || AppIcons.apps.Default
      res.push(<Icon key='Unfold' className="space__icon space__icon--unfold" />)
    }
    const Icon = AppIcons.apps[appName] || AppIcons.apps.Default
    res.push(<Icon className={classes} key={i} />)
    return res
  })
}

export default OpenedApps
