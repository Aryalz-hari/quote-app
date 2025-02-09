import { Route, Routes ,Navigate} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import NewQuote from "./pages/NewQuote";
function App() {
  return (<Layout>
<Routes>
  <Route path="/" element={<Navigate to='/quotes'/> } exact/>
  <Route path="/quotes" element={<AllQuotes/>} exact/>
  <Route path="/quotes/:quoteId/*" element={<QuoteDetail/>}/>
  <Route path="/new-quote" element={<NewQuote/>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>
</Layout>
    
  );
}

export default App;
