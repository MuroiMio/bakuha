'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      router.push(`/result?text=${encodeURIComponent(text)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 overflow-hidden">
      {/* 背景の装飾要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="p-6 sm:p-8">
          {/* タイトル部分 */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-6"
          >
            <h1 className="text-2xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mb-2 tracking-tight">
              ストレス解消
            </h1>
            <div className="flex items-center justify-center gap-1">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-lg"
              >
                💣
              </motion.div>
              <p className="text-gray-300 text-sm sm:text-base font-light">
                今の気持ちを爆破しよう!
              </p>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
                className="text-lg"
              >
                💥
              </motion.div>
            </div>
          </motion.div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className={`relative transition-all duration-300 ${isFocused ? 'transform scale-[1.01]' : ''}`}>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="ストレスの原因を入力..."
                  className="w-full px-4 py-3 text-base bg-gray-900/50 text-white border border-gray-600/50 rounded-xl focus:outline-none focus:border-orange-500/70 focus:bg-gray-900/70 transition-all duration-300 placeholder-gray-500"
                  maxLength={50}
                />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-xl transition-opacity duration-300 -z-10 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              <div className="flex justify-between items-center mt-2 px-1">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: text.length > 0 ? 1 : 0 }}
                  className="text-orange-400 text-xs font-medium"
                >
                  {text.length > 0 && `あと${50 - text.length}文字`}
                </motion.p>
                <p className="text-gray-500 text-xs">{text.length}/50</p>
              </div>
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={!text.trim()}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={text.trim() ? { scale: 1.02, y: -1 } : {}}
              whileTap={text.trim() ? { scale: 0.98 } : {}}
              className={`relative w-full py-3 font-bold text-base sm:text-lg rounded-xl transition-all duration-300 overflow-hidden ${
                text.trim() 
                  ? 'bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white shadow-lg cursor-pointer' 
                  : 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <motion.span
                  animate={text.trim() ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💥
                </motion.span>
                爆破する！
                <motion.span
                  animate={text.trim() ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                >
                  💥
                </motion.span>
              </span>
              {text.trim() && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600"
                  animate={{ x: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ width: '200%' }}
                />
              )}
            </motion.button>
          </form>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              入力内容は保存されません
            </p>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}