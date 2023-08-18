interface WrapperProps {
    className?: string
    children: React.ReactNode
  }
  const Wrapper = ({ className, children }: WrapperProps) => {
    return <div className={className}>{children}</div>
  }
  
  export default Wrapper