import * as Uebersicht from 'uebersicht'
import * as DataWidget from './data-widget.jsx'
import * as DataWidgetLoader from './data-widget-loader.jsx'
import * as Icons from '../icons.jsx'
import useWidgetRefresh from '../../hooks/use-widget-refresh'
import * as Utils from '../../utils'
import * as Settings from '../../settings'

export { naturalScrollStyles as styles } from '../../styles/components/data/natural-scroll'

const settings = Settings.get()
const { widgets, naturalScrollWidgetOptions } = settings
const { naturalScrollWidget } = widgets
const { refreshFrequency } = naturalScrollWidgetOptions

const DEFAULT_REFRESH_FREQUENCY = 20000
const REFRESH_FREQUENCY = Settings.getRefreshFrequency(refreshFrequency, DEFAULT_REFRESH_FREQUENCY)

const switchNaturalScrollDirection = async () => {
  await Uebersicht.run(`osascript ./simple-bar/lib/scripts/switch-scroll-direction.scpt`)
  getScrollDirection()
}

export const Widget = () => {
  const [state, setState] = Uebersicht.React.useState()
  const [loading, setLoading] = Uebersicht.React.useState(naturalScrollWidget)
  
  const getScrollDirection = async () => {
    const [system, scrollDirection ] = await Promise.all([
      Utils.getSystem(),
      Uebersicht.run(`defaults read -g com.apple.swipescrolldirection`)
    ])
    setState({
      system,
      scrollDirection: scrollDirection
    })
    setLoading(false)
  }

  useWidgetRefresh(naturalScrollWidget, getScrollDirection, REFRESH_FREQUENCY)

  if (loading) return <DataWidgetLoader.Widget className="scroll" />
  if (!state) return null

  const { system, scrollDirection } = state

  const classes = Utils.classnames('scroll', {
    'scroll--natural': scrollDirection,
    'scroll--reverse': !scrollDirection
  })

  const onClick = async (e) => {
    Utils.clickEffect(e)
    await switchNaturalScrollDirection()
    getScrollDirection()
  }

  const Icon = () => (
    <Icons.Mouse className="scroll__icon" />
  )

  return (
    <DataWidget.Widget classes={classes} Icon={Icon} disableSlider onClick={onClick}>
      {(scrollDirection == 1)  ? <Icons.UpArrow className="scroll--natural"/> : <Icons.DownArrow className="scroll--reverse"/>}
    </DataWidget.Widget>
  )
}
