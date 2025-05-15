"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Users, School, Heart, Award } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  icon: React.ReactNode;
}

function Counter({ end, duration, label, icon }: CounterProps) {
  const { theme } = useTheme();
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full">
        {icon}
      </div>
      <div
        className={`text-4xl font-bold mb-2 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {count.toLocaleString()}+
      </div>
      <div
        className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
      >
        {label}
      </div>
    </div>
  );
}

export default function CounterSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 ${
        theme === "dark" ? "bg-gray-800/50" : "bg-primary/5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter
            end={15000}
            duration={2000}
            label="People Helped"
            icon={<Users className="h-8 w-8 text-primary" />}
          />
          <Counter
            end={120}
            duration={2000}
            label="Projects Completed"
            icon={<Award className="h-8 w-8 text-primary" />}
          />
          <Counter
            end={50}
            duration={2000}
            label="Schools Supported"
            icon={<School className="h-8 w-8 text-primary" />}
          />
          <Counter
            end={25}
            duration={2000}
            label="Health Camps"
            icon={<Heart className="h-8 w-8 text-primary" />}
          />
        </div>
      </div>
    </section>
  );
}
