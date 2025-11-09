import { QueryClient, QueryClientProvider } from 'react-query';
import QueryApp from './QueryApp'
import { ReactQueryDevtools } from "react-query/devtools";
import { ErrorBoundary } from 'react-error-boundary';
import { Exception } from './features/exception/components/Exception';

function App() {

  console.log("App render");

  //React-Query用
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ErrorBoundary
      FallbackComponent={Exception}
    >
      <QueryClientProvider client={queryClient}>
        <QueryApp />
        {/* React-query devtool */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
