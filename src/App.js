import useForecast from "./hooks/useForecast";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";
import Loading from "./components/Loader/Loading";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const submitSearch = (value) => {
    submitRequest(value);
  };
  return (
    <div className="App">
      <Header />
      <Form submitSearch={submitSearch} />
      {isError.status && <Error msg={isError.msg} />}
      {isLoading && <Loading />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
