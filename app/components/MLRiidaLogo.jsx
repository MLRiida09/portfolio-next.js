
const MLRiidaLogo = ({ size = 'normal', className = '' }) => {
  const sizeClasses = {
    small: 'text-2xl',
    normal: 'text-4xl',
    large: 'text-6xl'
  }

  const dotSizes = {
    small: 'w-2 h-2',
    normal: 'w-4 h-4',
    large: 'w-5 h-5'
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <h1 className={`${sizeClasses[size]} font-bold text-gray-800 tracking-tight`}>
        MLRiida
      </h1>
      <div className={`${dotSizes[size]} bg-blue-600 rounded-full`} />
    </div>
  )
}

export default MLRiidaLogo