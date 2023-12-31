import react, { useEffect, useState } from "react";

// react query
import { QueryClient, QueryClientProvider } from "react-query";

// contexts
import { VisibleScrensProvider } from "./contexts/VisibleScreens";
import { TempProvider } from "./contexts/TempContext";
import { CurrentIdProvider } from "./contexts/TempCurrentContext";

// components
import Widget from "./components/Widget/Widget";

function App() {
  // react query
  const client = new QueryClient();

  // loading necessary stuffs (fonts, pages checks...)
  useEffect(() => {
    // append font
    const fontLink1 = document.createElement("link");
    fontLink1.rel = "preconnect";
    fontLink1.href = "https://fonts.googleapis.com";

    const fontLink2 = document.createElement("link");
    fontLink2.rel = "preconnect";
    fontLink2.href = "https://fonts.gstatic.com";
    fontLink2.crossOrigin = true;

    const fontLink3 = document.createElement("link");
    fontLink3.href =
      "https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap";
    fontLink3.rel = "stylesheet";

    document.head.appendChild(fontLink1);
    document.head.appendChild(fontLink2);
    document.head.appendChild(fontLink3);
  }, []);

  return (
    <>
      <QueryClientProvider client={client}>
        <VisibleScrensProvider>
          <TempProvider>
            <CurrentIdProvider>
              <Widget />
            </CurrentIdProvider>
          </TempProvider>
        </VisibleScrensProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
