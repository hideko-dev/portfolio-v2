import App from './pages/index.svelte'
import "./css/global.css";
import "./css/fonts.css";
import "svelte-ripple-action/ripple.css";

const app = new App({
  target: document.getElementById('index'),
})

export default app
