export function Iphone17Pro({ src, className = '', ...props }) {
  return (
    <div className={`relative mx-auto ${className}`} {...props}>
      <div className="relative mx-auto" style={{ width: '220px', height: '450px' }}>
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-2xl shadow-black/50" />
        {/* Inner bezel */}
        <div className="absolute inset-[3px] rounded-[2.8rem] bg-black" />
        {/* Screen */}
        <div className="absolute inset-[6px] rounded-[2.6rem] overflow-hidden bg-black">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />
          {src ? (
            <img
              src={src}
              alt="iPhone screenshot"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800" />
          )}
        </div>
        {/* Side button (right) */}
        <div className="absolute right-[-2px] top-[120px] w-[3px] h-[50px] bg-zinc-600 rounded-r-sm" />
        {/* Volume buttons (left) */}
        <div className="absolute left-[-2px] top-[100px] w-[3px] h-[30px] bg-zinc-600 rounded-l-sm" />
        <div className="absolute left-[-2px] top-[140px] w-[3px] h-[50px] bg-zinc-600 rounded-l-sm" />
        {/* Bottom bar */}
        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-zinc-600 rounded-full" />
      </div>
    </div>
  );
}
