import '../styles/global.css'
import GurubaseWidget from '../components/GurubaseWidget'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GurubaseWidget 
        widgetId="YOUR_WIDGET_ID" // Replace with your actual widget ID
        // Optional props:
        // text="Ask AI"
        // margins={{ bottom: "20px", right: "20px" }}
        // lightMode="auto"
        // bgColor="YOUR_BG_COLOR"
        // iconUrl="YOUR_ICON_URL"
        // name="YOUR_NAME"
        // overlapContent="false"
      />
    </>
  )
} 