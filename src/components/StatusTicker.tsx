import { useState, useEffect } from "react";
import { Clock, MapPin, Radio } from "lucide-react";

const StatusTicker = () => {
  const [time, setTime] = useState<string>("");
  const [status, setStatus] = useState<{ label: string; color: string; beans: string }>({
    label: "LOADING",
    color: "bg-gray-500",
    beans: "...",
  });

  useEffect(() => {
    const updateTime = () => {
      // Create date object for Tokyo time
      const now = new Date();
      const tokyoTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
      
      // Format time: HH:MM:SS
      const timeStr = tokyoTime.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(timeStr);

      // Determine status based on Tokyo hour
      const hour = tokyoTime.getHours();
      
      if (hour >= 7 && hour < 11) {
        setStatus({
          label: "MORNING RITUAL",
          color: "bg-amber-500",
          beans: "ETHIOPIA GEDEB",
        });
      } else if (hour >= 11 && hour < 16) {
        setStatus({
          label: "PEAK SERVICE",
          color: "bg-blue-600",
          beans: "COLOMBIA PINK BOURBON",
        });
      } else if (hour >= 16 && hour < 20) {
        setStatus({
          label: "EVENING POUR",
          color: "bg-violet-500",
          beans: "KENYA AA",
        });
      } else {
        setStatus({
          label: "ROASTERY CLOSED",
          color: "bg-zinc-800",
          beans: "SYSTEM STANDBY",
        });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-b border-border bg-background text-xs font-mono tracking-widest uppercase">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2 px-4 gap-2">
        
        {/* Left: Location & Time */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3" />
            <span>SHIBUYA, TOKYO</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3" />
            <span className="tabular-nums">{time} JST</span>
          </div>
        </div>

        {/* Center: Live Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.color}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${status.color}`}></span>
          </span>
          <span className="font-bold">{status.label}</span>
        </div>

        {/* Right: Current Bean */}
        <div className="hidden md:flex items-center gap-2 text-muted-foreground">
          <Radio className="h-3 w-3" />
          <span>ON BAR: {status.beans}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusTicker;
