export function MacbookPro({ src, className = '', ...props }) {
  return (
    <div className={`relative mx-auto ${className}`} {...props}>
      <div className="relative mx-auto" style={{ maxWidth: '520px' }}>
        {/* Screen housing */}
        <div className="relative rounded-t-xl bg-gradient-to-b from-zinc-700 to-zinc-800 p-[6px] shadow-2xl shadow-black/40">
          {/* Screen bezel */}
          <div className="rounded-t-lg bg-black p-[3px]">
            {/* Camera notch */}
            <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-zinc-600 rounded-full z-10" />
            {/* Screen */}
            <div className="rounded-t-md overflow-hidden bg-zinc-900" style={{ aspectRatio: '16/10' }}>
              {src ? (
                <img
                  src={src}
                  alt="MacBook screenshot"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
                  <div className="text-zinc-600 text-4xl"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Hinge / base top */}
        <div className="relative">
          <div className="mx-auto h-[10px] bg-gradient-to-b from-zinc-600 to-zinc-500 rounded-b-sm" style={{ width: '40%' }} />
          {/* Base */}
          <div className="mx-[-4%] h-[8px] bg-gradient-to-b from-zinc-400 to-zinc-500 rounded-b-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
