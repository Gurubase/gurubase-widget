'use client'

import Script from 'next/script'

export default function GurubaseWidget({
  widgetId,
  text = "Ask AI",
  margins = { bottom: "20px", right: "20px" },
  lightMode = false,
  bgColor = null,
  iconUrl = null,
  name = null,
  tooltip = null,
  tooltipWidth = null
}) {
  return (
    <Script
      src="https://widget.gurubase.io/widget.latest.min.js"
      strategy="lazyOnload"
      async
      id="guru-widget-id"
      data-widget-id={widgetId}
      data-text={text}
      data-margins={JSON.stringify(margins)}
      data-light-mode={String(lightMode)}
      {...(bgColor && { "data-bg-color": bgColor })}
      {...(iconUrl && { "data-icon-url": iconUrl })}
      {...(name && { "data-name": name })}
      {...(tooltip && { "data-tooltip": tooltip })}
      {...(tooltipWidth && { "data-tooltip-width": tooltipWidth })}
    />
  )
}