import * as Uebersicht from 'uebersicht'
import * as DataWidget from './data-widget.jsx'
import * as DataWidgetLoader from './data-widget-loader.jsx'
import * as Icons from '../icons.jsx'
import useWidgetRefresh from '../../hooks/use-widget-refresh'
import * as Utils from '../../utils'
import * as Settings from '../../settings'

export { memoryStyles as styles } from '../../styles/components/data/memory'

const settings = Settings.get()
const { widgets, memoryWidgetOptions } = settings
const { memoryWidget } = widgets
const { refreshFrequency } = memoryWidgetOptions

const DEFAULT_REFRESH_FREQUENCY = 20000
const REFRESH_FREQUENCY = Settings.getRefreshFrequency(refreshFrequency, DEFAULT_REFRESH_FREQUENCY)

const launchActivityMonitor = async () => {
  await Uebersicht.run('open "/System/Applications/Utilities/Activity Monitor.app"')
}

export const Widget = () => {
  const [state, setState] = Uebersicht.React.useState()
  const [loading, setLoading] = Uebersicht.React.useState(memoryWidget)
  
  const getMemory = async () => {
    const [system, used_percentage] = await Promise.all([
      Utils.getSystem(),
      Uebersicht.run(`memory_pressure | tail -n 1 | cut -d ' ' -f 5 | cut -d '%' -f 1`)
    ])
    setState({
      system,
      percentage: 100 - used_percentage
    })
    setLoading(false)
  }

  useWidgetRefresh(memoryWidget, getMemory, REFRESH_FREQUENCY)

  if (loading) return <DataWidgetLoader.Widget className="memory" />
  if (!state) return null

  const { system, percentage } = state
  const isLowMemory = percentage < 50
  const isCriticalMemory = percentage > 70
  const isMediumMemory = percentage > 50 & !isCriticalMemory

  const classes = Utils.classnames('memory', {
    'memory--critical': isCriticalMemory,
    'memory--low': isLowMemory,
    'memory--medium': isMediumMemory,
  })

  const onClick = async (e) => {
    Utils.clickEffect(e)
    await launchActivityMonitor()
    getMemory()
  }

  const Icon = () => (
    <Icons.Ram className="" />
    // <div className="memory__icon">
    //   <div className="memory__icon-inner">
    //     <Icons.Ram className="" />
    //     <div className="memory__icon-filler" />
    //   </div>
    // </div>
  )

  return (
    <DataWidget.Widget classes={classes} Icon={Icon} disableSlider onClick={onClick}>
      {percentage}%
    </DataWidget.Widget>
  )
}
