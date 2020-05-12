import React, { Component } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import AppRouting from "./AppRouting";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            {/* Routing  */}
            <AppRouting />
            {/* End Routing  */}
          </div>
        </PersistGate>
      </Provider>
    );
  }
}


export default App;
