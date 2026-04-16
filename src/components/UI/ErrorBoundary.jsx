import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-white p-6 text-center">
          <h2 className="font-heading text-4xl mb-4 italic">Something went wrong.</h2>
          <p className="font-mono text-sm text-white/50 mb-8 max-w-md">
            The application encountered an unexpected error. This might be due to a 3D rendering issue or a connection glitch.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 border border-white/10 font-mono text-xs tracking-widest uppercase hover:bg-white/5 transition-colors cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
