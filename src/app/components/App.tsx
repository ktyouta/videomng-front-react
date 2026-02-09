import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import { Exception } from '../../features/exception/components/Exception';
import QueryApp from './QueryApp';

//React-Query用
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  console.log("App render");

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

export default App;
