import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, User, Lock, Mail, Phone, CheckCircle2 } from 'lucide-react';

export const AuthModal = () => {
  const {
    language,
    isAuthModalOpen,
    setIsAuthModalOpen,
    user,
    setUser,
    addToast
  } = useApp();

  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    password: ''
  });

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: formData.name || (language === 'ar' ? 'معاذ سمير' : 'Moaz Samir'),
      email: formData.email || 'moaz@staylux.com',
      phone: formData.phone || '+966 50 123 4567',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    });

    addToast(
      mode === 'login'
        ? (language === 'ar' ? 'تم تسجيل الدخول بنجاح! مرحباً بعودتك' : 'Logged in successfully! Welcome back')
        : (language === 'ar' ? 'تم إنشاء الحساب بنجاح! أهلاً بك في StayLux' : 'Account created successfully! Welcome to StayLux'),
      'success'
    );
    setIsAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-modal">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-6 p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">
                {mode === 'login' ? (language === 'ar' ? 'تسجيل الدخول' : 'Sign In') : (language === 'ar' ? 'إنشاء حساب جديد' : 'Create Account')}
              </h3>
              <p className="text-[11px] text-slate-400">
                {language === 'ar' ? 'استمتع بحسومات وحجوزات حصرية' : 'Enjoy exclusive luxury member rates'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toggle Mode Tabs */}
        <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800">
          <button
            onClick={() => setMode('login')}
            className={`w-1/2 py-2 text-xs font-bold rounded-lg transition-colors ${
              mode === 'login' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400'
            }`}
          >
            {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
          </button>
          <button
            onClick={() => setMode('register')}
            className={`w-1/2 py-2 text-xs font-bold rounded-lg transition-colors ${
              mode === 'register' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400'
            }`}
          >
            {language === 'ar' ? 'حساب جديد' : 'Register'}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">
                {language === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 pr-10 text-xs text-white focus:border-amber-400 focus:outline-none"
                  placeholder="معاذ سمير"
                />
                <User className="w-4 h-4 text-slate-500 absolute top-3.5 right-3" />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">
              {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 pr-10 text-xs text-white focus:border-amber-400 focus:outline-none"
                placeholder="moaz@staylux.com"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute top-3.5 right-3" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">
              {language === 'ar' ? 'كلمة المرور' : 'Password'}
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 pr-10 text-xs text-white focus:border-amber-400 focus:outline-none"
                placeholder="••••••••"
              />
              <Lock className="w-4 h-4 text-slate-500 absolute top-3.5 right-3" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-sm hover:brightness-110 transition-all shadow-lg shadow-amber-500/20"
          >
            {mode === 'login' ? (language === 'ar' ? 'دخول الآن' : 'Sign In Now') : (language === 'ar' ? 'تأكيد التسجيل' : 'Create Account')}
          </button>
        </form>

      </div>
    </div>
  );
};
