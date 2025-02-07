import { Route, Routes ,Navigate} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
function App() {
  return (
<Routes>
  <Route path="/" element={<Navigate to='/quotes'/> } exact/>
  <Route path="/quotes" element={<AllQuotes/>} exact/>
  <Route path="/quotes/:quoteId/*" element={<QuoteDetail/>}/>
  <Route path="/new-quote" element={<NewQuote/>}/>
</Routes>
    
  );
}

export default App;
