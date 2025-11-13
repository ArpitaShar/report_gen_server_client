import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false, err: null } }
  static getDerivedStateFromError(error){ return { hasError: true, err: error } }
  componentDidCatch(error, info){ console.error('ErrorBoundary', error, info) }
  render(){
    if(this.state.hasError){
      return (
        <div className="p-4 text-red-700">
          <h2 className="font-bold">UI crashed</h2>
          <pre className="text-xs whitespace-pre-wrap">{String(this.state.err)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
