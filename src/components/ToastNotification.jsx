import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const ToastNotification = () => {
  const { toasts } = useApp();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center gap-3 p-4 rounded-xl shadow-2xl backdrop-blur-md border transition-all duration-300 transform translate-y-0 ${
            toast.type === 'success'
              ? 'bg-slate-900/90 border-emerald-500/50 text-emerald-300'
              : toast.type === 'warning'
              ? 'bg-slate-900/90 border-amber-500/50 text-amber-300'
              : 'bg-slate-900/90 border-cyan-500/50 text-cyan-300'
          }`}
        >
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
          {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-cyan-400 shrink-0" />}
          <p className="text-sm font-medium leading-relaxed">{toast.message}</p>
        </div>
      ))}
    </div>
  );
};
