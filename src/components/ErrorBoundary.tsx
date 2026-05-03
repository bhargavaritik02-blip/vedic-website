import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, MessageSquare } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onRetry?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public handleRetry = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-[#050505] border border-red-500/20 rounded-2xl text-center backdrop-blur-sm w-full h-full min-h-[300px]">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-serif text-white mb-2">Cosmic Connection Interrupted</h3>
          <p className="text-zinc-400 mb-6 max-w-md">
            {this.state.error?.message || "We encountered an unexpected stellar disturbance while consulting the stars. Please try again or contact support."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={this.handleRetry}
              className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-xl font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <a
              href="https://wa.me/919928433259?text=I'm%20facing%20an%20error%20with%20the%20free%20horoscope."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
